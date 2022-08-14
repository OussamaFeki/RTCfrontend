import React, { Component } from "react";
import'./maincontent.css'
export default class MainContent extends Component{
    render (){
        return(
            <div className="p-3">
                 <p className="p-4 position-absolute top-100 translate-middle">hello</p>
                  <img src="https://th.bing.com/th/id/R.09501a311d99c01f5dd7b62e623c0f2d?rik=syVYQ5OS6rJtoQ&pid=ImgRaw&r=0" className="im1 rounded float-end"  alt="..."></img>  
                </div>
        )
    }
}