import React from 'react'
import AdminNavbar from '../layout/AdminNavbar'
import AdminSideBar from '../layout/AdminSidebar'
import { Container } from 'react-bootstrap'

const AdminApproveCounsellor = () => {
  return (
    <>
      <AdminNavbar/>
      <div style={{display:"flex"}}>
        <AdminSideBar/>
        <Container fluid>
            lll
        </Container>
      </div>
    </>
  )
}

export default AdminApproveCounsellor
