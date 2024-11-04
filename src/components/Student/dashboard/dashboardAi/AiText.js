import React from 'react'
import { RiRobot3Fill } from "react-icons/ri";
import { FaBoltLightning } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const AiText = () => {
    const data = [
        {
            icon:<RiRobot3Fill />,
            title:"AI powered answers",
            description:"We use ChatGPT trained with questions from students around the world."
        },
        {
            icon:<FaBoltLightning />,
            title:"Fast assistance",
            description:"Answers are provided in seconds, helping you get unstuck fast."
        },
        {
            icon:<GoQuestion />,
            title:"How to ask",
            description:"Clear questions with relevant information lead to the best answer"
        }
    ]
  return (
    <div className='d-flex mt-5 justify-content-between'>
      {
        
        data.map((item,index)=>(
            <Card style={{ width: '20rem',background:"transparent",padding:"15px" }}>
            <Card.Body>
                <div className='d-flex align-items-center'>
              <Card.Title style={{fontSize:"25px",color:"#6b21a8",paddingRight:"10px"}}>{item.icon}</Card.Title>
              <Card.Title> {item.title}</Card.Title>
                </div>
              <Card.Text className='pt-2'>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export default AiText
