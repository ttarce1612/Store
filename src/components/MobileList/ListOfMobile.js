import React from 'react';
import ProductDetail from '../ProducDetail/ProductDetail'


function  Pagination() {
        let items = [];
        let active = 2;
        for (let number = 1; number <=9 ; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
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
function buildMobileList() {
    
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
