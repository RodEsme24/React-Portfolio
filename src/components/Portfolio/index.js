import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from "./Project"

let projectData = [
    {
        img: 'proj2banner',
        title: 'Project Two',
        text: 'Allows user to search for movies based on a short quiz',
        link: 'https://myflix-project2.herokuapp.com/login'
    },
    {
        img: 'proj2banner',
        title: 'Project Three',
        text: 'Allows weird ting',
        link: 'https://myflix-project2.herokuapp.com/login'
    }
]

function Portfolio() {
    return (
<Container className="flex-grow-1 center-vert-col">
    {projectData.map(item => 
        (
            <Project  info={item}/>
        )
    )}
  </Container>
    )
   
    }
  
export default Portfolio;