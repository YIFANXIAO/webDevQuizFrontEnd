import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import MyHeader from './components/MyHeader';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Mall from './components/mall/Mall'

const {Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <MyHeader />
          <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div> */}
            <Switch>
                <Route exact path='/' component={Mall}/>
                <Route path='/counters' component={Mall}/>
                <Route path='/form' component={Mall}/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
