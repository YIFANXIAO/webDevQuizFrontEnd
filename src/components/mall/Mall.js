import React from 'react'
import Product from './Product'
import axios from 'axios';
// import './components/mall/Mall.css'

// let fetch = axios.create({
//     baseURL: "http://localhost:8080", // 这里是本地express启动的服务地址
//     timeout: 5000 // request timeout
// })

class Mall extends React.Component{

    state = {
        products:[
            {
                img: 'https://img14.360buyimg.com/n0/jfs/t4705/83/2924377281/70031/aed9bbd3/58f5629dN79b4406c.jpg',
                name: '测试',
                price: '5',
                unit: '罐',
            },
            {
                img: 'https://img14.360buyimg.com/n0/jfs/t4705/83/2924377281/70031/aed9bbd3/58f5629dN79b4406c.jpg',
                name: '测试2',
                price: '5',
                unit: '罐',
            },
            {
                img: 'https://img14.360buyimg.com/n0/jfs/t4705/83/2924377281/70031/aed9bbd3/58f5629dN79b4406c.jpg',
                name: '测试3',
                price: '5',
                unit: '罐',
            }
        ]
    }

    render() {
        return <div className="mall">
            {this.state.products.map((item) => 
                <Product
                    key={item.name}
                    img={item.img} 
                    name={item.name} 
                    price={item.price} 
                    unit={item.unit}
                ></Product>
            )}
        </div>
    }
}

export default Mall
