import { Drawer } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Sidebar.module.css"

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
    
  return (
    <Drawer anchor='left' open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div className={styles.navlinks}>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/">Home</Link>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/branches">Branches</Link>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/about">About</Link>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/contact">Contact</Link>
        </div>
    </Drawer>
  )
}

export default Sidebar