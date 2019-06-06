import React from 'react';

import './css/Pagination.css';
import { Pagination } from 'react-bootstrap';
// import image from './listSildeShow/1.png'
import 'owl.carousel2/dist/assets/owl.carousel.css';
import $ from 'jquery';
// import 'imports?jQuery=jquery!owl.carousel';
import ProductDetail from './ProducDetail/ProductDetail'
class SildeShow extends React.Component {
    constructor(props){
        super(props);
        this.state ={
           pageSize : 6,
           data :[],
           list :[],

        }
        
    }

    buildMobileList(dataToBuild) {
        let data2 = [
            {
                picture: 'pd1.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd2.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd3.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd4.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd5.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd6.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd7.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd8.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd9.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            }
        ]
        
        let list = [];
        for (let i in data2) {
            list.push(
                <div key= {i} style={{ display: "inline-block", padding: "3vw" }}>
                    <ProductDetail data={data2[i]} />
                </div>
            )
        }
        return list;
    }
    buideData () {
        let data2 = [
            {
                picture: 'pd1.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd2.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd3.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd4.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd5.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd6.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd7.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd8.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd9.jpeg',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            }
        ]
        this.setState({data : data2});
    }

    // chunkArray( start, end) {
    //     let _data = this.state.data;
    //     let list = [];
    //     for (let i = start; i<end; i++){
    //         <div key= {i} style={{ display: "inline-block", padding: "3vw" }}>
    //                 <ProductDetail data={_data[i]} />
    //             </div>  
    //     }
    //     return list;
    // }

    goTo(pageNo, event) {
        console.log(pageNo);
        let _data = this.state.data;
        let pageSize = 2;
        let start = (pageNo - 1) * pageSize
        let  end = start + pageSize;
        let data =[];
        for (let i = start; i<end; i++){
            data.push(
            <div key= {i} style={{ display: "inline-block", padding: "3vw" }}>
                    <ProductDetail data={_data[i]} />
                </div>  
            )
        }
       this.setState({list: data});
    }

    Pagination() {
        let items = [];
        let active = 1;
        for (let number = 1; number <=9 ; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={this.goTo.bind(this, number)}>
                    {number}
                </Pagination.Item>,
            );
        }

        const paginationBasic = (
            <div>
                <Pagination>{items}</Pagination>
                <br />
            </div>
        )
        return paginationBasic;
    }
    componentDidMount() {
        this.buideData ();
        this.goTo(1);

    }
    render() {
        return (
            <div>


                {/* <Carousel >
                    <Carousel.Item>
                        <img alt=""
                            className="d-block w-100"
                            src='images/1.png'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt=""
                            className="d-block w-100"
                            src='images/2.png'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt=""
                            className="d-block w-100"
                            src='images/3.png'
                        />
                    </Carousel.Item>
                </Carousel> */}
                      {this.state.list}
                {/* {this.buildMobileList()} */}
                {this.Pagination()}

            </div>
        )
    }

} export default SildeShow;
