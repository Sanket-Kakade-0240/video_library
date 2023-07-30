import React from "react";
import styled from "styled-components";
import {PersonCircle} from 'react-bootstrap-icons';

const Container = styled.div`
height: 60px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
margin-left: 25px;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 25px;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          <Logo>Uthub.io</Logo>
        </Center>
        <Right>
          <MenuItem>
            <PersonCircle />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;