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
        // productssss : [],
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
        return <div className="mall">
            {this.state.products.map((item) => 
                <Product
                    key={item.name}
                    img={item.image} 
                    name={item.name} 
                    price={item.price} 
                    unit={item.unit}
                ></Product>
            )}
        </div>
    }
}

export default Mall
