import React from 'react'
import { Button, Table, Space } from 'antd';
import axios from 'axios';
const { Column } = Table;

class Order extends React.Component{
    state = {
        orders : [],
        columns: [
            {Name: false},
            {Age: false},
            {Address: false},
            {name: false},
        ]
    };

    componentDidMount() {
        this.getOrdersData();
    }

    getOrdersData() {
        axios.get('/order/all')
            .then((respone) => {
                this.setState({
                    orders : respone.data,
                });
            })
    }


    reloadPage = () => {
      window.location.reload();
    }
  
    handleDeleteOrder = (id) => {
        console.log(id);
        axios.delete('/order/' + id);
        this.reloadPage();
    }

    render() {
        return (<div>
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
                        <Button type="" size={'small'} onClick={() => this.handleDeleteOrder(record.id)}>删除</Button>
                    </Space>
                )}
                />
            </Table>
        </div>)
    }
}

export default Order;
