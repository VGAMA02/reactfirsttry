import React, { Component } from "react";
import Slider from './Slider';
import SideBar from './SideBar';
class Blog extends Component {
    render() {
       
        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                ></Slider>

                <div className="center">
                    <div id="content">
                        {/*Listado de articulos que vendran del api res de node*/}
                    </div>
                    <SideBar
                        blog="true"
                    ></SideBar>
                </div>
               

            </div>
        );
    }
}

export default Blog;