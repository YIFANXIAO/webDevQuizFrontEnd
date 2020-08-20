import React from 'react'
import Product from './Product'
import axios from 'axios';
import { List } from 'antd';

class Mall extends React.Component{

    state = {
        products:[]
    }

    componentDidMount() {
        this.getProductsData();
    }

    getProductsData() {
        axios.get('/product/all')
            .then((respone) => {
                this.setState({
                    products : respone.data,
                });
            })
    }

    
    render() {
        return <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={this.state.products}
            renderItem={item => (
            <List.Item>
                <Product
                    key={item.id}
                    productId={item.id}
                    img={item.image} 
                    name={item.name} 
                    price={item.price} 
                    unit={item.unit}
                ></Product>
            </List.Item>
            )}
        />
    }
}

export default Mall
