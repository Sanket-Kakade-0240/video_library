import React from 'react'
import { categories } from "../data";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Left from '../components/Left';


const Title = styled.h1`
    padding-top: 30px ;
    text-align: center;
`
const Container = styled.div`
    padding: 0 30px 30px 30px ;
    display: flex;
    
`

const Right = styled.div`
flex: 6;
padding: 20px;
display: flex;
flex-wrap: wrap;
`
const Card = styled.div`
width: 200px;
margin: 1rem;
border-radius: 0.5rem;
`

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Title>Video Library</Title>
        <Container>
            <Left/>
            <Right>
                {categories.map((category) => (
                <Card key={category._id}>
                    <Link to={`/videos/${category.category}`} style={{ textDecoration: 'none', color: 'black' }}>
                    
                    <img src={category.thumbnail} alt="" width={200}/>  
                    <h3>{category.category}</h3>  
                    </Link>
                </Card>
                ))}
            
            </Right>
        </Container>
        <hr />
        <Footer/>
    </div>
    
  )
}

export default Home