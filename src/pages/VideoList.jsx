import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { videos } from "../data";
import styled from "styled-components";
import Left from '../components/Left';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ChevronLeft } from 'react-bootstrap-icons';
import { Clock,ClockFill } from 'react-bootstrap-icons';

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
position: relative;
`

const Description = styled.div`
  display: flex;
  
`
const ProfileIcon = styled.img`

  margin-right: 0.5rem;
  border-radius: 30px;
  height: 40px;
  width: 40px;
`
const Info = styled.div`

`
const WatchLater = styled.button`
border:none;
position: absolute;
top:0;
right:0;
border-radius: 0 0 0 0.5rem ;
`

export const VideoList = () => {
  const { category } = useParams();

  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  const filteredVideos = videos.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const toggleWatchLater = (id) => {
    if (watchLaterVideos.some((video) => video._id === id)) {
      setWatchLaterVideos((prevWatchLaterVideos) =>
        prevWatchLaterVideos.filter((video) => video._id !== id)
      );
    } else {
      const videoToAdd = videos.find((video) => video._id === id);
      setWatchLaterVideos((prevWatchLaterVideos) => [...prevWatchLaterVideos, videoToAdd]);
    }
  };

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
              {filteredVideos.map((video) =>  (
                <Card key={video._id}>
                  <img src={video.thumbnail} alt={video.category} width={200}/>
                  <Description>
                  <ProfileIcon src={video.thumbnail} />
                  <Info>
                  <b>{video.title}</b>
                  <p>{video.views}|{video.creator}</p>
                  
                  </Info>
                  </Description>
                  <WatchLater onClick={() => toggleWatchLater(video._id)}>
                  {watchLaterVideos.some((v) => v._id === video._id) ? <ClockFill/> : <Clock/>}
                  </WatchLater>
                </Card>  
            ))}
          </Right>
        </Container>
        <hr />
        <Footer/>
    </div>
  );
};


