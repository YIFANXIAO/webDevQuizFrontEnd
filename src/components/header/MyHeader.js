import React from 'react';
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
import { ShoppingCartOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons'
const {Header} = Layout;

class MyHeader extends React.Component{
    render() {
        return (
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><Link to='/mall'><HomeOutlined />商城</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/orders'><ShoppingCartOutlined />订单</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/add-product'><PlusOutlined />添加商品</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default MyHeader;
