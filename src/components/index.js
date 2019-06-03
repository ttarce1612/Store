import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/Pagination.css'
import SildeShow from './SildeShow';
import ListMobile from './MobileList/ListOfMobile'
import ListLaptop from './LaptopList/LaptopList'




    function DefaultApp(){
        return (
            <div>
                <SildeShow />
                {/* <ListAllProduct />             */}
            </div>);
    }
    
    function ListByType(){
        return (
            <div>
                <SildeShow />
                
            </div>
        )
    }
    function ShowListMobile(){
        return (
            <div>
                <ListMobile />
                
            </div>
        )
    }
    function ShowListLaptop(){
        return (
            <div>
                <ListLaptop />

            </div>
        )
    }
    
function Menu (){
    return (
        <div className="app-content">
            {/* <Container>
                <Navbar
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

            </Container> */}
        
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/mobile/">Danh Sach Dien thoai</Link>
                            </li>
                            <li>
                                <Link to="/laptop/">Danh Sach Laptop</Link>
                            </li>
                            <li>
                                <Link to="/list/">Danh Sach San Pham</Link>
                            </li>
                            <li>
                                <Link to="/order/">About</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={DefaultApp} />
                    <Route path="/list/" component={ListByType} />
                    {/* <Route path="/order/" component={Order} /> */}
                    <Route path="/mobile/" component={ShowListMobile} />
                    <Route path="/laptop/" component={ShowListLaptop} />
                    
                </div>
                </Router>
          
          

        </div>
    )
}
export default Menu;