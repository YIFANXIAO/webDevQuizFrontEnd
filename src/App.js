import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import MyHeader from './components/MyHeader';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Mall from './components/mall/Mall'
import Order from './components/order/Order'

const {Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <MyHeader />
          <Content style={{ padding: '0 50px' }}>
            <Switch>
                <Route exact path='/' component={Mall}/>
                <Route path='/orders' component={Order}/>
                <Route path='/add-product' component={Mall}/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>TW Mall ©2020 Created by ForCheng</Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
