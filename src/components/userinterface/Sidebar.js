import React, { Component } from "react";
import {Flex} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component{
    render(){
        return(
            <div className="mt-5 offcanvas offcanvas-start show text-bg-dark"  id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
            {/* <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
            </div> */}
            <div className="offcanvas-body">
             <NavLink to="/">Friends</NavLink><br/>
             <NavLink to="/groups">Groups</NavLink>
            </div>
          </div>
        )
    }
}