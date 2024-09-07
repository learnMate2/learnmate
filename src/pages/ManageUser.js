import React from 'react'
import { Container } from 'react-bootstrap';

import DashboardNavbar from '../components/dashboard/DashboardNavbar'
import SideBar from '../components/admin/layout/Sidebar'
import User from "../components/admin/manageUser/Users"
const ManageUser = () => {
    return (
        <div>
            <DashboardNavbar />
            <div style={{ display: 'flex' }}>

                <SideBar />
                <Container fluid className='p-5'>
                    <h2 >Manage user</h2>
                    <div>
                        <input type="text" style={{ width:"100%",padding:"10px 30px",margin: "0 auto", border: "2px solid #6b21a8",borderRadius: "22px"}} placeholder='Search Users here....'/>
                    </div>
                    <User/>
                    <User/>
                    <User/>
                </Container>
            </div>
        </div>
    )
}

export default ManageUser
