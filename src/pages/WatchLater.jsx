import React, { useState, useEffect } from 'react';
// import { videos } from "../data";
import { Link } from 'react-router-dom';
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


export const WatchLater = () => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  useEffect(() => {
    const storedWatchLaterVideos = JSON.parse(localStorage.getItem('watchLaterVideos')) || [];
    setWatchLaterVideos(storedWatchLaterVideos);
  }, []);


  useEffect(() => {
    localStorage.setItem('watchLaterVideos', JSON.stringify(watchLaterVideos));
  }, [watchLaterVideos]);

  const removeVideoFromWatchLater = (id) => {
    setWatchLaterVideos((prevWatchLaterVideos) =>
      prevWatchLaterVideos.filter((video) => video._id !== id)
    );
  };

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
            <div>
              {watchLaterVideos.map((video) => (
                <Card key={video._id}>
                  <img src={video.thumbnail} alt={video.category} width={200} />
                  <b>{video.title}</b>
                  <p>{video.views}|{video.creator}</p>
                  <button onClick={() => removeVideoFromWatchLater(video._id)}>Remove</button>
                  
                </Card>
              ))}
            </div>
          )}
        </Right>
      </Container>
      <hr />
    <Footer/>
    </div>
  );
};


