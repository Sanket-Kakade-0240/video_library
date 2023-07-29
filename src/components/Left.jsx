import React from 'react'
import styled from "styled-components";
import { HouseDoorFill,CompassFill,MusicNoteList,ClockFill } from 'react-bootstrap-icons';


const LeftContainer = styled.div`
    padding: 30px;
    flex: 1;
    font-size: 20px;
    flex-direction: column;
`
const MenuItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`

const Left = () => {
  return (
    <LeftContainer>
                <MenuItem> 
                <HouseDoorFill style={{marginRight: "1rem"}}/> Home 
                </MenuItem>
                <MenuItem>
                <CompassFill style={{marginRight: "1rem"}}/> Explore 
                </MenuItem>
                <MenuItem>
                <MusicNoteList style={{marginRight: "1rem"}}/> Playlists  
                </MenuItem>
                <MenuItem>
                <ClockFill style={{marginRight: "1rem"}}/> Watch Later 
                </MenuItem>

            </LeftContainer>
  )
}

export default Left