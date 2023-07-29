import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Twitter, Pinterest, GeoAltFill,EnvelopeFill,TelephoneFill } from 'react-bootstrap-icons';

const Container = styled.div`
display: flex;

`
const LeftSide = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Brand = styled.h1``
const Description = styled.div`
margin: 20px 0px;
`
const Socials = styled.div`
display: flex;

`
const Icons = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.bgcolor};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h2`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const RigthSide = styled.div`
flex: 1;
padding: 20px;
`
const Contacts = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <Container>
        
        <LeftSide>
            <Brand>Uthub.io</Brand>
            <Description>Uthub.io is an e-video library that offers a wide variety of educational and entertaining videos. Whether you're looking for a tutorial on how to code, a lecture on history, or a comedy sketch, Uthub.io has something for everyone.
            </Description>
            <Socials>
                <Icons bgcolor="3B5999" > 
                    <Facebook/>
                </Icons>
                <Icons bgcolor="E4405F">
                    <Instagram/>
                </Icons>
                <Icons bgcolor="55ACEE">
                    <Twitter/>
                </Icons>
                <Icons bgcolor="E60023">
                    <Pinterest/>
                </Icons>
            </Socials> <br />
            © 2023 Uthub.io
        </LeftSide>

        <Center>
            
            <Title>Useful Links</Title>
            <List>
                <ListItem>Library</ListItem>
                <ListItem>History</ListItem>
                <ListItem>Your Videos</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Liked Videos</ListItem>
                
            </List>
        </Center>

        <RigthSide>
            
            <Title>Connect Us</Title>
            <Contacts>
                <GeoAltFill style={{marginRight: "10px"}} />    123, Trafalgar Square , 431001
            </Contacts>
            <Contacts>
                <TelephoneFill style={{marginRight: "10px"}}  /> +91 1234567890 
            </Contacts>
            <Contacts>
                <EnvelopeFill style={{marginRight: "10px"}} /> connect@uthub.io.com
            </Contacts>
            
        </RigthSide>
    </Container>
  )
}

export default Footer