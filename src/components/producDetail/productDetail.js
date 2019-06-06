import React from 'react';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data || [],
        }
    }

    render() {
        return (
            <div className="product-detail">
                <div id="row1">
                    <span id='picture'>
                     <img src={'images/'+this.state.data.picture} alt='' />
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