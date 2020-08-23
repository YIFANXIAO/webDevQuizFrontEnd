import React from 'react'
import { Card, message} from 'antd';
import { Button, Spin } from 'antd';
import axios from 'axios';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import './Product.css';
const { Meta } = Card;

class Product extends React.Component{

    state = {
        loading: false
    }

    onHandleBuy = (id) => {
        this.setState({
            loading: true
        })
        axios.post('/order/' + id)
            .then((req) => {
                if(req.status === 200) {
                    message.success("已添加到购物车")
                }
            })
            .then(() => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {

        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

        return <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img style = {{ width: '220px', height: '220px'}}  alt="example" src={this.props.img} />}
            >
                <Meta title={this.props.name}/>
                <p>单价：{this.props.price}元/{this.props.unit}</p>
                <div className='btn-div'>
                    {
                        this.state.loading ?
                        <Spin indicator={antIcon} spinning={this.state.loading} /> : 
                        <Button shape="circle"
                            onClick={() => this.onHandleBuy(this.props.productId)}
                            icon={<PlusOutlined />}
                        ></Button>
                    }
                </div>
            </Card>
        </div>
    }
}

export default Product