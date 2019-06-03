import React from 'react';
import ProductDetail from '../ProductDetail'

function LaptopList() {
    
    let data2 = [
        {
            picture: 'lt1.png',
            name: 'laptop',
            brand: 'apple',
            model: "macbookpro",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'lt2.png',
            name: 'laptop',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'lt3.png',
            name: 'laptop',
            brand: 'asus',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'lt4.png',
            name: 'laptop',
            brand: 'dell',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'lt5.png',
            name: 'laptop',
            brand: 'vaio',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'lt6.png',
            name: 'laptop',
            brand: 'hp',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        },
        {
            picture: 'lt7.png',
            name: 'laptop',
            brand: 'samsung',
            model: "Galaxy S10 5G",
            price: '15000',
            color: "yellow"
        }

    ]
    let list = [];
    for (let i in data2) {
        list.push(
            <div key={i} style={{ display: "inline-block", padding: "3vw" }}>
                <ProductDetail data={data2[i]} />
            </div>
        )
    }
    return list;
}export default LaptopList;
