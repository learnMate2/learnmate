import React from 'react';
import { Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import image1 from '../../../../images/upload_notes_1.jpg'; 
import image2 from '../../../../images/upload_notes_2.jpg'; 

const notes = [
    {
        image: image1,
        title: 'DATA STRUCTURES VIVA QUESTIONS',
        span: "Data Structure",
    },
    {
        image: image2,
        title: 'Analysis of Build-Max-Heap',
        span: "Data Structure",
    },
    {
        image: image1,
        title: 'Paging solution',
        span: "Data Structure",
    },
    {
        image: image2,
        title: 'Essays From Examiners 2019',
        span: "Data Structure",
    }
];

const YourUploads = () => {
    return (
        <Container className="my-5">
            <h2 className="mb-4">Your Uploads</h2>
            <Row>
                {notes.map((note, index) => (
                        <Card key={index} style={{ width: '12rem' ,marginRight:"8px" }}>
                            <Card.Img variant="top" src={note.image} alt={note.title} style={{height:"120px"}}/>
                            <Card.Body>
                                <Card.Title>{note.title}</Card.Title>
                                <Card.Text>
                                    {note.span}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                ))}
            </Row>
        </Container>
    );
}

export default YourUploads;
