import React from 'react'
import { Button, Table, Space, message } from 'antd';
import axios from 'axios';
import './Order.css'
const { Column } = Table;

class Order extends React.Component{
    state = {
        orders : [],
        columns: [
            {Name: false},
            {Age: false},
            {Address: false},
            {name: false},
        ],
        isNotEmpty: true
    };

    componentDidMount() {
        this.getOrdersData();
    }

    getOrdersData() {
        axios.get('/order/all')
            .then((respone) => {
                if(respone.data.hasOwnProperty('code')) {
                    this.setState({
                        isNotEmpty: false
                    })
                } else {
                    this.setState({
                        orders : respone.data,
                    });
                }
                
            })
    }


    reloadPage = () => {
      window.location.reload();
    }
  
    handleDeleteOrder = (id) => {
        console.log(id);
        axios.delete('/order/' + id)
            .then((req) => {
                if(req.status === 200) {
                    this.reloadPage();
                    message.success('已删除');
                }
            })
            .catch(() => {
                message.error('订单删除失败，请稍后再试')
            })
        
    }

    render() {
        return (<div>
            {
                this.state.isNotEmpty ?
                <Table dataSource={this.state.orders}>
                    <Column title="名字" dataIndex="name" key="name" />
                    <Column title="单价" dataIndex="price" key="price" />
                    <Column title="数量" dataIndex="count" key="count" />
                    <Column title="单位" dataIndex="unit" key="unit" />
                    <Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button danger size={'small'} onClick={() => this.handleDeleteOrder(record.id)}>删除</Button>
                        </Space>
                    )}
                    />
                </Table> :
                <div className="no-data">
                    <p>暂无订单，返回商城页面继续购买</p>
                </div>
                
            }
            
        </div>)
    }
}

export default Order;
