import React, { Component } from "react";
import { Flex, Spacer,Box,Button,ButtonGroup,Heading } from '@chakra-ui/react'
import { Link, Outlet } from "react-router-dom";

export default class MainInterface extends Component{
    render(){
        return(
        <div>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
              <Heading size='md'>RTCWeb</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
              <Button colorScheme='teal' ><Link to='/'>Sign Up</Link></Button>
              <Button colorScheme='teal'><Link to='/login'>Log in</Link></Button>
            </ButtonGroup>
            </Flex>
            <Outlet/>
          </div>
          )
    }
  
}