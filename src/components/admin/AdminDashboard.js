import React from 'react'
import Navbar from "./layout/Navbar";
import Sidebar from './layout/Sidebar';
import { Container } from 'react-bootstrap';
const AdminDashboard = () => {
  return (
    <>
      <Navbar/>
      <div className='d-flex'>
        <Sidebar/>
        <Container fluid>
    <h1>Admin dashboard</h1>
        </Container>
      </div>
    </>
  )
}

export default AdminDashboard
