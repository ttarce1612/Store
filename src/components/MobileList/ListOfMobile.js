import React from 'react';
import ProductDetail from '../ProductDetail'

function buildMobileList() {
    
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
            picture: 'pd2.png',
            name: 'mobile',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'pd3.png',
            name: 'mobile',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'pd4.png',
            name: 'mobile',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'pd5.png',
            name: 'mobile',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'pd6.png',
            name: 'mobile',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'pd7.png',
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
}export default buildMobileList;
