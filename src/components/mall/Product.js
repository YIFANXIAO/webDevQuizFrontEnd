import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import axios from 'axios';
const { Meta } = Card;

class Product extends React.Component{

    onHandleBuy = (id) => {
        axios.post('/order/' + id)
    }

    render() {
        return <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img style = {{ width: '220px', height: '220px'}}  alt="example" src={this.props.img} />}
            >
                <Meta title={this.props.name}/>
                <p>单价：{this.props.price}元/{this.props.unit}</p>
                <Button type="primary" onClick={() => this.onHandleBuy(this.props.productId)}>购买</Button>
            </Card>
        </div>
    }
}

export default Product