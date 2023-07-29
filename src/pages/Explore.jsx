import React, { useState } from 'react'
import styled from "styled-components";
import Left from '../components/Left';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { videos } from "../data";
import { ChevronLeft } from 'react-bootstrap-icons';
import { Search,Clock,ClockFill } from 'react-bootstrap-icons';

const Title = styled.h1`
    padding: 30px ;
    text-align: center;
`
const Head = styled.div`
display: flex;
align-items: center;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
justify-content: space-between;
width: 50%;
height: 5vh;
align-items: center;
margin: auto;

`;
const Input = styled.input`
  border: none;
  width: 90%;
  height: 90%;
`;

const Container = styled.div`
    padding: 0 30px 30px 30px ;
    display: flex;
    
`
const Right = styled.div`
flex: 6;
padding: 20px;
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
const Info = styled.p`

`
const WatchLater = styled.button`
border:none;
position: absolute;
top:0;
right:0;
border-radius: 0 0 0 0.5rem ;
`



const Explore = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [watchLaterVideos, setWatchLaterVideos] = useState([]);
    const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = videos.filter((video) => video.title.toLowerCase().includes(query));
    setSearchResults(results);
    };

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
      
  return (
    <div>
        <Navbar/>
        <Title>Explore</Title>
        <Head>
            <Link to="/" style={{ paddingLeft:"4rem" }}><ChevronLeft/></Link>
            <SearchContainer>
                <Input 
                type="text"
                placeholder="Search by video title..."
                value={searchQuery}
                onChange={handleSearch}
                 />
                <Search style={{ width:"10%" ,color: "gray", fontSize: 16 }} />
            </SearchContainer>
        </Head>
        <Container>
            <Left/>
            <Right>
                {searchQuery && searchResults.length === 0 ? (<p>No results found.</p>) : (
                <List>
                {searchResults.map((video) => (
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
                </List>
                )}
          </Right>
        </Container>
        <hr />
        <Footer/>
    </div>
  )
}

export default Explore