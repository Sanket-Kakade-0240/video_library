import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { videos } from "../data";
import styled from "styled-components";
import Left from '../components/Left';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ChevronLeft } from 'react-bootstrap-icons';

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
font-size: 14px;
`


export const VideoList = () => {
  const { category } = useParams();

  const filteredVideos = videos.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredVideos.length === 0) {
    return (
      <div>
        <h2>Category not found!</h2>
        <Link to="/"> <ChevronLeft/>Back to home </Link>
      </div>
    );
  }

  return (
    <div>
        <Navbar/>
        
        <Title>{category}</Title>
        <Container>
            <Left/>
            <Link to="/"><ChevronLeft/></Link>

            <Right>
                {filteredVideos.map((video) => (
                    <Card key={video._id}>
                    <img src={video.thumbnail} alt={video.category} width={200}/>
                    <b>{video.title}</b>
                    <p>{video.views}|{video.creator}</p>
                    </Card>
                ))}

            </Right>
        </Container>
        <hr />
        <Footer/>
    </div>
  );
};


