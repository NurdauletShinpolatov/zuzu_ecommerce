import { Drawer } from '@mui/material'
import React from 'react'

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
    
  return (
    <Drawer anchor='left' open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div className="div">
            <p>something</p>
        </div>
    </Drawer>
  )
}

export default Sidebar