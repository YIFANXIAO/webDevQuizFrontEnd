import React from 'react';
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
import { ShoppingCartOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons'
const {Header} = Layout;

class MyHeader extends React.Component{

    state = {
        mall: '1',
        orders: '2',
        addproduct: '3'
    }

    componentDidMount() {
        if(window.location.pathname === '/orders') {
            this.setState({
                mall: '2',
                orders: '1',
                addproduct: '3'
            })
        }
        if(window.location.pathname === '/add-product') {
            this.setState({
                mall: '2',
                orders: '3',
                addproduct: '1'
            })
        }
    }

    render() {
        return (
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key={[this.state.mall]}><Link to='/mall'><HomeOutlined />商城</Link></Menu.Item>
                    <Menu.Item key={[this.state.orders]}><Link to='/orders'><ShoppingCartOutlined />订单</Link></Menu.Item>
                    <Menu.Item key={[this.state.addproduct]}><Link to='/add-product'><PlusOutlined />添加商品</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default MyHeader;
