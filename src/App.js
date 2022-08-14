import './App.css';
import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes,Route } from 'react-router-dom';
import Login from './components/maininterface/login';
import UserInterface from './components/userinterface/userInterface';
import Friends from './components/userinterface/Friends';
import Groups from './components/userinterface/Groups';
import MainInterface from './components/maininterface/main';
import MainContent from './components/maininterface/maincontent';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={product:{
  //     title:undefined,
  //     price:undefined
  //   }}
  // }
  state={product:{
         title:undefined,
         price:undefined}}
   handelChange=(e)=>{
    e.preventDefault()
   this.setState({product:{...this.state.product,title:e.target.value
  }})
   }
   result=''
   submit=()=>{
    console.log(this.state)
    this.result=this.state.product.title
    console.log(this.result)
   }
  render(){
    return (
      <ChakraProvider>
         <Routes>
            <Route exact path='/' element={<UserInterface/>}>
              <Route index element={<Friends/>}/>
             <Route path='/groups' element={<Groups/>}/>
            </Route>
            <Route  path='/main' element={<MainInterface/>}>
              <Route index element={<MainContent/>} />
            </Route>
            <Route path='/login' element={<Login/>} />
          
        </Routes>  
       
      </ChakraProvider>
      
    // <div>
    //   <input type='text' onChange={this.handelChange}/>
    //   <button onClick={this.submit}>submit</button>
    //   <p>{}</p>
    // </div>
      );
  }
  
}

export default App;
