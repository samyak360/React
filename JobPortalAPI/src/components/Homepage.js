import {React, useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import Jobcard from './Jobcard.js'

const Homepage = () => {

    const [data, setData] = useState('');
    const datafetch = async () => {
        const response = await fetch('https://open-api-for-all.herokuapp.com/jobs');
        const data2 = await response.json();
        setData(data2);
    }

    useEffect(()=>{
        datafetch();
    },[]);

    console.log(data)
    return (
        <div style={{backgroundColor: '#212630', paddingBottom: '20px'}}>
        <Container >
            <h2 style={{color: 'white', padding:'20px 0px'}}>Job finder helps you find best job for you. You will find a list of Jobs on latest technologies below. </h2>
            <Row>
                { data &&
                data.map((carddata) => (
                    <Col xs={12} md={4} key= {carddata.id}>
                        <Jobcard 
                        id = {carddata.id}
                        title =  {carddata.title}
                        city = {carddata.city}
                        logo = {carddata.logo}
                        salary = {carddata.salary}
                        company = {carddata.company}
                        jobtype = {carddata.jobtype}
                        pubdate = {carddata.pubdate}
                        />
                    </Col>
                ))
                } 
                
            </Row>
            
        </Container>
        </div>
        
    )
}

export default Homepage;