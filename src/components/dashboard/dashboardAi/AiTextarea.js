import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { IoIosArrowDroprightCircle } from "react-icons/io";
const AiTextarea = () => {
  return (
    
       <div>
            <FloatingLabel controlId="floatingTextarea2" label="Ask a question">
              <Form.Control
                as="textarea"
                placeholder="Ask a question"
                style={{ height: '100px', resize: "none" }}
              />
              <IoIosArrowDroprightCircle  style={{fontSize:"35px",color:"#6b21a8",marginTop:"10px"}}/>
            </FloatingLabel>
          </div>
   
  )
}

export default AiTextarea
