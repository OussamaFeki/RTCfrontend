import React, { Component } from "react";
import { TabList,Tab,Tabs,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    IconButton,
    Avatar,AvatarBadge,
    Text
 } from '@chakra-ui/react'
 import {EditIcon,HamburgerIcon,AddIcon,ExternalLinkIcon,RepeatIcon,SearchIcon,EmailIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

class Navbar extends Component{
    render(){
        
        return(
<Tabs>
  
  <TabList
  bgGradient={'linear(to-l, #55e2f5, #ffffff)'}>
      
      <InputGroup size='md'>
       <Input
        pr='4.5rem'
        // type={show ? 'text' : 'password'}
        placeholder='Search for friends'
        htmlSize={12} width='auto'
        />
       <InputRightElement left='60'  width='4.5rem'>
          <Button h='1.75rem' size='sm'> 
           < SearchIcon/>
          </Button>
       </InputRightElement>
      </InputGroup>
      <EmailIcon pos="absolute" top="3" left="80"  />
    
    <Avatar size='sm' bg='teal.500' pos="absolute" top="1" right="44" >
    <AvatarBadge boxSize='1.25em' bg='green.500' />
    </Avatar>
    <Text fontWeight='bold' pos="absolute" top="2" right="79">Username </Text>
    <Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    pos="absolute" top="0" right="3"
  />
  <MenuList>
    <MenuItem icon={<AddIcon />}>
      Profile
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />}>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} >
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />}>
      Edit Profile 
    </MenuItem>
  </MenuList>
</Menu>
    
  </TabList>

  {/* <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels> */}
</Tabs>
          )
    }
  
}
export default Navbar