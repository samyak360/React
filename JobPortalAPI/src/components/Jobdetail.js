import {React, useEffect, useState} from 'react'
 
import {Container, Row, Col, Table} from 'react-bootstrap'
import style from './Jobdetail.module.css'

const Jobdetail = (props) => {

    const [data, setData] = useState('');
    const datafetch = async () => {
        const response = await fetch(`https://open-api-for-all.herokuapp.com/jobs/${props.match.params.id}`);
        const data2 = await response.json();
        setData(data2);
    }

    useEffect(()=>{
        datafetch();
    },[]);

    return(
        <div style={{backgroundColor: '#212630', color: '#fff', paddingBottom: '20px'}}>
            <div className = {style.banner} height='250px'></div>
            <img src={data.logo} alt ='' style = {{marginTop: '-50px', marginLeft: '9%'}} height='100px' width='100px' />
            <div style={{marginTop: '26px'}}>
                <Container>
                    <Row>
                        <Col>
                        <h2>{data.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' md='6'>
                            <p><strong>Location:  </strong> {data.location}</p>
                        </Col>
                        <Col xs='12' md='6'>
                            <p style={{textAlign: 'right'}} ><strong>Published on:  </strong> {data.pubdate} </p>
                        </Col>
                    </Row>

                    <p style={{marginTop: '10px'}}>APPLY HERE: <a href={data.url}>{data.url}</a></p>
                    
                    <div style={{margin: '20px'}}>
                        <Table bordered variant="dark" responsive="sm">
                            <thead >
                                <tr>
                                <th>Category</th>
                                <th>Job Type</th>
                                <th>Salary</th>
                                <th>Region</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{data['@category']}</td>
                                <td>{data.jobtype}</td>
                                <td>{data.salary}</td>
                                <td>{data.region}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    
                    <br/><br/>
                    <h2>Overview</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.desc }}></div>
                </Container>
            </div>
        </div>
    )
}

export default Jobdetail;