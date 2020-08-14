import React from 'react'
import Product from './Product'

class Mall extends React.Component{

    state = {
        products:[
            {
                img: 'https://img14.360buyimg.com/n0/jfs/t4705/83/2924377281/70031/aed9bbd3/58f5629dN79b4406c.jpg',
                name: '可乐',
                price: '5',
                unit: '罐',
            }
        ]
    }

    render() {
        return <div>
            <Product 
                img={this.state.products[0].img} 
                name={this.state.products[0].name} 
                price={this.state.products[0].price} 
                unit={this.state.products[0].unit}
            ></Product>
        </div>
    }
}

export default Mall
