import React from 'react'
import styled from "styled-components";
import { HouseDoorFill,CompassFill,MusicNoteList,ClockFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


const LeftContainer = styled.div`
padding: 30px;
flex: 1;
font-size: 20px;
flex-direction: column;
`
const MenuItem = styled.div`
display: flex;
margin-bottom: 1rem;
`

const Left = () => {
  return (
    <LeftContainer>
                <MenuItem> 
                  <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                    <HouseDoorFill style={{marginRight: "1rem"}}/> Home 
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/videos/explore`} style={{ textDecoration: 'none', color: 'black' }}>
                  <CompassFill style={{marginRight: "1rem"}}/> Explore
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/videos/playlist`} style={{ textDecoration: 'none', color: 'black' }}>
                  <MusicNoteList style={{marginRight: "1rem"}}/> Playlists 
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/videos/watch-later`} style={{ textDecoration: 'none', color: 'black' }}>
                  <ClockFill style={{marginRight: "1rem"}}/> Watch Later 
                  </Link>
                </MenuItem>

            </LeftContainer>
  )
}

export default Left