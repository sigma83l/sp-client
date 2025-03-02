import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';

function CartScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null); // Store user ID

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        // Fetch user ID from JWT token
        const { data: userData } = await axios.get(`${process.env.FLASK_API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserId(userData.id);

        // Fetch user's cart
        const { data } = await axios.get(`${process.env.FLASK_API_URL}/cart/${userData.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCartItems(data.cart || []);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCart();
  }, []);

  const updateCartHandler = async (product_id, quantity) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.put(
        `${process.env.FLASK_API_URL}/cart/${userId}`,
        { items: [{ product_id, quantity }] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(data.cart || []);
    } catch (error) {
      alert(error.response?.data?.error || 'Error updating cart');
    }
  };

  const removeItemHandler = async (product_id) => {
    try {
      await updateCartHandler(product_id, 0); // Set quantity to 0 to remove item
    } catch (error) {
      alert('Error removing item');
    }
  };

  const checkoutHandler = () => {
    router.push('/payment');
  };

  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.{' '}
          <NextLink href="/" passHref>
            <Link>Go shopping</Link>
          </NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.product_id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image src={item.image} alt={item.name} width={50} height={50} />
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          value={item.quantity}
                          onChange={(e) => updateCartHandler(item.product_id, e.target.value)}
                        >
                          {[...Array(item.stock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="secondary" onClick={() => removeItemHandler(item.product_id)}>
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button onClick={checkoutHandler} variant="contained" color="primary" fullWidth>
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
