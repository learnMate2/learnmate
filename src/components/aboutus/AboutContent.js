import React from 'react'
import { Container } from 'react-bootstrap'
import "../../styles/styles.css"
const AboutContent = () => {
  return (
    <Container>
        <h1 style={{margin:"20px 0"}}>About Us</h1>
        <h3 className='subheading'>Welcome to Student Pay Student!</h3>
        <p > At Student Pay Student, we believe in empowering students through knowledge sharing and collaboration. Our platform is designed to create a community where IT students can seamlessly exchange academic resources, earn money, and enhance their learning experience.</p>
        <h3>Our Mission</h3>
        <p >Our mission is to provide a comprehensive and user-friendly platform where students can:</p>
        <ul>
            <li>Access Quality Notes: Download high-quality notes and study materials curated by fellow students.</li>
            <li>Share Knowledge: Upload and share your own notes to earn money while helping others succeed.</li>
            <li>Hire Academic Assistance: Hire verified student freelancers for writing notes, assignments, and providing lectures.</li>
        </ul>
        <h3>Why Choose Us?</h3>
        <ul>
            <li>Student-Centric: Our platform is designed by students, for students. We understand the challenges and needs of student life.</li>
            <li>Secure Transactions: We ensure all transactions are secure and reliable, providing a safe marketplace for buying and selling academic resources.</li>
            <li>Verified Community: We verify all freelancers through student cards and university certificates, ensuring that only genuine students participate.</li>
            <li>Continuous Improvement: We are committed to continuously improving our platform based on user feedback and the latest technological advancements.</li>
        </ul>
        <h3>Join Us</h3>
        <p className='paragraph'>Become a part of our growing community and start benefiting from the collective knowledge of students around the world. Whether you’re looking to share your notes, find quality study materials, or hire academic assistance, Student Pay Student is here to support you every step of the way.</p>
    </Container>
  )
}

export default AboutContent
