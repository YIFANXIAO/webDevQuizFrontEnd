import React from 'react';
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
const {Header} = Layout;

class MyHeader extends React.Component{
    render() {
        return (
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><Link to='/mall'>商城</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/orders'>订单</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/add-product'>添加商品</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default MyHeader;
