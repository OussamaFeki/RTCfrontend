import React from "react";
import { Component } from "react";
import axios from "axios";
export default class Friends extends Component{
 
 componentDidMount(){
    console.log('componesntDidMount')
    // axios.get()
 }   
 render(){
    return(<div>
        friends
    </div>)
 }
}