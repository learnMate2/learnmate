import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Users = () => {
    return (
        <div>
            <Card style={{ width: '100%', marginTop: "30px" }}>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Card.Text>
                            Shayan Bhai
                        </Card.Text>
                    </div>
                    <div>
                        <Button variant="danger" style={{ marginRight: "10px" }}>Delete</Button>
                        <Button variant="primary">Edit</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Users
