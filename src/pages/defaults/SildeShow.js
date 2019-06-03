import React from 'react';

import './css/LoginPage.css';
import { Carousel } from 'react-bootstrap';
// import image from './listSildeShow/1.png'

class SildeShow extends React.Component {

    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <img alt= ""
                        className="d-block w-100"
                        src= 'images/1.png'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt= ""
                        className="d-block w-100"
                        src= 'images/2.png'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt= ""
                        className="d-block w-100"
                         src= 'images/3.png'
                    />
                </Carousel.Item>
            </Carousel>
        )
    }

} export default SildeShow;