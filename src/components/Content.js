import React from 'react';

import { Container, Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import './css/Pagination.css';
import SildeShow from './SildeShow';
// import ShipmentBox from './ShipmentBox';
import ProductDetail from './producDetail/productDetail'


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.buildProductList = this.buildProductList.bind(this);
        // this.buildShipmentBox();
    }



    // buildShipmentBox() {
    //     let data = [
    //         {
    //             Status: "Complete",
    //             Transactionid: "D56789",
    //             Shipcode: "786543"
    //         },
    //         {
    //             Status: "ERROR",
    //             Transactionid: "D56789",
    //             Shipcode: "786543"
    //         },
    //         {
    //             Status: "In process",
    //             Transactionid: "D56789",
    //             Shipcode: "786543"
    //         },
    //         {
    //             Status: "In process",
    //             Transactionid: "D56789",
    //             Shipcode: "786543"
    //         },
    //         {
    //             Status: "In process",
    //             Transactionid: "D56789",
    //             Shipcode: "786543"
    //         }
    //     ]
    //     let result = [];
    //     for (let i in data) {
    //         result.push(
    //             <div key={i} className="one-row-line" >
    //                 <ShipmentBox data={data[i]} />
    //             </div>
    //         )
    //     }
    //     return result;
    // }

    buildProductList() {
        let data2 = [
            {
                picture: 'pd1.png',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd1.png',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            },
            {
                picture: 'pd1.png',
                name: 'mobile',
                brand: 'samsung',
                model: "Galaxy S10 5G",
                price: '15000',
                color: "yellow"
            }

        ]
        let list = [];
        // for (let i in data2) {
        //     let row1 = this.buildrow(i,data2[i]);
        //     list.push(
        //         <div style={{display:"inline-block", padding:"3vw"}}>
        //            {row1}
        //         </div>
        //     )
        // }


        for(let i in data2){
            list.push(
                <div style={{display:"inline-block", padding:"3vw"}}>
                        <ProductDetail data={data2[i]} />
                    </div>
            )
        } 
        return list;
    }
    // buildrow( key, data3){
    //     data3[0] = <img src={"images/"+data3[0]} alt={data3[3]} />
    //     let _row = [];
    //     for(let i in data3){
    //         _row.push(
    //             <div key = {key}>
    //             <ProductDetail data={data3[i]} />
    //             </div>
    //         )
    //     }
    //     return _row;
    // }
    render() {
        return (
            <div className="app-content">
                <Container>
                    {/* <Row>
                        {this.props.data}
                    </Row> */}
                    <Navbar
                        // bg="dark" 
                        // variant="dark" 
                        id="main-menu">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        <Nav className="menu-left" style={{ float: "right" }}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Danh Sach San Pham</Nav.Link>
                            <Nav.Link href="#pricing">Lien He</Nav.Link>
                        </Nav>
                    </Navbar>

                </Container>
                <div className="sildeshow">
                    {/* <SildeShow /> */}

                </div>
                <div>
                    {/* {this.buildShipmentBox()} */}
                </div>
                <div>
                    {this.buildProductList()}
                </div>
            </div>
        )
    }
}

export default Content;