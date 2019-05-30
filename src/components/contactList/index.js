import React from 'react';
import '../css/Pagination.css';
import { Table } from 'react-bootstrap'


class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoad: false,

        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoad: true,
                    items: json
                })
            })

    }
    buildHeader() {
        let _data = ['STT', 'Name', 'UserName', 'Email', 'Website', 'Company', 'Address'];
        var _header = [];
        for (let i in _data) {
            _header.push(
                <td>
                    {_data[i]}
                </td>
            )
        }
        var header = <tr>{_header}</tr>
        return header;
    }
    buildBody() {
        let _body = [];
        for (let i in this.state.items) {
            let _data = this.state.items[i];
            _body.push(
                <tr>
                    <td>{parseInt(i) + 1}</td>
                    <td>{_data.name}</td>
                    <td>{_data.username}</td>
                    <td>{_data.email}</td>
                    <td>{_data.website}</td>
                    <td>{_data.company.name}</td>
                    <td>{_data.address.city}</td>
                </tr>
            )
        }
        return _body;
    }

    render() {

        var { isLoad, items } = this.state;
        console.log(items)
        if (!isLoad) {
            return <div>Loading....</div>
        } else {
            return (
                <div className="App">
                    {/* <div>Data is loaded</div> */}
                    <div className="table-context" >
                        <Table responsive striped bordered hover>
                            <thead >
                                {this.buildHeader()}
                            </thead>
                            <tbody>
                                {this.buildBody()}
                            </tbody>

                        </Table>
                    </div>

                </div>
            );
        }
    }
} export default ContactList;
