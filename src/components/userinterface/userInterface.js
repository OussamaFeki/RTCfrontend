import { Outlet } from "react-router"
import React, { Component } from "react"
import Navbar from "./navbar"
import Sidebar from "./Sidebar"
export default class UserInterface extends Component{
render(){
    return(
      <div>
        {/* <div className="row">
            <div className="col-12">
            <Navbar />
            </div>
        </div> */}
        <div className='row row-cols-4'>
         <div className="col-12">
         <Navbar />
         </div>
         <div className="col-sm-4">
         <Sidebar/>
         </div>
         <div className="col-sm-8">
         <Outlet/>
         </div>

        </div>
      </div>
        
    )
}
}