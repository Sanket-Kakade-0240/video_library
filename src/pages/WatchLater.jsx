import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Left from '../components/Left';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ChevronLeft,Clock,ClockFill } from 'react-bootstrap-icons';
import { useData } from '../context/DataProvider';

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
const List = styled.div`
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
const WatchLaterIcon = styled.button`
border:none;
position: absolute;
top:0;
right:0;
border-radius: 0 0 0 0.5rem ;
`

export const WatchLater = () => {
    const {watchLaterVideos,removeVideoFromWatchLater} = useData();

    return (
    <div>
      <Navbar />
      <Title>Watch Later Videos</Title>
      <Container>
        <Left />
        <Link to="/"><ChevronLeft /></Link>
        <Right>
          {watchLaterVideos.length === 0 ? (
            <p>No videos added to watch later.</p>
          ) : (
            <List>
              {watchLaterVideos.map((video) => (
                <Card key={video._id}>
                  <img src={video.thumbnail} alt={video.category} width={200} />
                  <Description>
                  <ProfileIcon src={video.thumbnail} />
                  <Info>
                  <b>{video.title}</b>
                  <p>{video.views}|{video.creator}</p>
                  </Info>
                  </Description>
                  <WatchLaterIcon onClick={() => removeVideoFromWatchLater(video._id)}>
                  {watchLaterVideos.some((v) => v._id === video._id) ? <ClockFill/> : <Clock/>}
                  </WatchLaterIcon>
                </Card>
              ))}
            </List>
          )}
        </Right>
      </Container>
      <hr />
    <Footer/>
    </div>
  );
};


