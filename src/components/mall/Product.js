import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';


const { Meta } = Card;
class Product extends React.Component{
    render() {
        return <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={this.props.img} />}
            >
                <Meta title={this.props.name}/>
                <p>单价：{this.props.price}元/{this.props.unit}</p>
                <Button type="primary" onClick={this.onHandleBuy}>购买</Button>
            </Card>
        </div>
    }
}

export default Product