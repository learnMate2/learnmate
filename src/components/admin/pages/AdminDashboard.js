import React from 'react'
import Navbar from "../layout/AdminNavbar";
import Sidebar from '../layout/AdminSidebar';
import { Container } from 'react-bootstrap';
import AdminHome from './AdminHome';
const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex'>
        <Sidebar />
        <Container fluid>
          <AdminHome/>
        </Container>
      </div>
    </>
  )
}

export default AdminDashboard
