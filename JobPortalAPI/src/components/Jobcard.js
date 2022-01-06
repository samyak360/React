import React from 'react'
import {Link} from'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
import style from './Jobcard.module.css'

const Jobcard = (props) => {

return(
    <Link to = {`/jobdetail/${props.id}`} style={{textDecoration: 'none', color: 'black'}}>
        <Card id = {props.id} className = {style.space}>
        <Card.Body>
            <Card.Text >
            <img src = {props.logo} alt='' height = {'80px'} width = {'80px'} />
            </Card.Text>
            <Card.Title className={style.oneline}>{props.title}</Card.Title>
            <Card.Text className = {style.oneline}>
            {props.company}
            </Card.Text>
            <Card.Text className = {`${style.highlighted} ${style.right}`}>
            {props.jobtype}
            </Card.Text>
            <Card.Text className = {style.oneline}>
            {props.city}
            </Card.Text>
            <Card.Text >
            <strong>{props.salary}</strong>
            </Card.Text>
            <Card.Text className={style.smalltext}>
            Posted on - {props.pubdate}
            </Card.Text>
            
        </Card.Body>
        </Card>
    </Link>
    
)

}

export default Jobcard