import React from 'react';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data || [],
        }
        // this.buildBody = this.buildBody.bind(this);
    }

    // buildBody() {
    //     let data2 = [
    //         {
    //             picture : 'pd1.png',
    //             name : 'mobile',
    //             brand : 'samsung',
    //             model: "Galaxy S10 5G",
    //             price : '15000',
    //             color: "yellow"
    //         }

    //     ]
    //     this.state.data = data2;
    // }
    render() {
        return (
            <div className="product-detail">
                <div id="row1">
                    <span id='picture'>
                        {this.state.data.picture}
                    </span>
                    <span> &nbsp; </span>
                </div>
                <div id="row2">
                    <span id='price'>
                        {this.state.data.model}
                    </span>
                </div>
                <div id="product-name-detail">
                    <span>
                        {this.state.data.price}
                    </span>
                    <span id="right">
                        {this.state.data.color}
                    </span>
                </div>
            </div>
        )
    }


} export default ProductDetail;