import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import MyHeader from './components/header/MyHeader';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Mall from './components/mall/Mall'
import Order from './components/order/Order'
import ProductForm from './components/productform/ProductForm'

const {Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <MyHeader />
          <Content style={{ padding: '0 50px' }}>
            <Switch>
                <Route exact path='/mall' component={Mall}/>
                <Route exact path='/orders' component={Order}/>
                <Route exact path='/add-product' component={ProductForm}/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>TW Mall ©2020 Created by ForCheng</Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
