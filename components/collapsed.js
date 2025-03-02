import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons
import styles from '../styles/CollapsingMenu.module.css';

const CollapsingMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.menu}>
      <button onClick={toggleMenu} className={styles.menuToggle}>
        {isCollapsed ? (
          <>
            <span>Show More</span>
            <FiChevronDown className={styles.icon} />
          </>
        ) : (
          <>
            <span>Show Less</span>
            <FiChevronUp className={styles.icon} />
          </>
        )}
      </button>
      <ul className={`${styles.menuList} ${isCollapsed ? styles.collapsed : ''}`}>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
        <li>Category 5</li>
        <li>Category 6</li>
        <li>Category 7</li>
        <li>Category 8</li>
      </ul>
    </div>
  );
};

export default CollapsingMenu;