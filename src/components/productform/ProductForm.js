import React from 'react'
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import './ProductForm.css'

import { validateNumLength } from '../common/validators'

class ProductForm extends React.Component {

    state = {
      formLayout: 'vertical',
      name: '',
      price: '',
      unit: '',
      image: '',
    };

    reloadPage = () => {
      window.location.reload();
    }

    handleName = event => {
      this.setState({
        name: event.target.value
      })
    }

    handlePrice = event => {
      this.setState({
        price: event.target.value
      })
    }

    handleUnit = event => {
      this.setState({
        unit: event.target.value
      })
    }

    handleImage = event => {
      this.setState({
        image: event.target.value
      })
    }

    render() {
      const handleAddProduct = values => {
        console.log('触发了onFinish', values);
        axios.post('/product', values)
          .then((req) =>{
            if(req.data.hasOwnProperty('code')) {
              message.error(req.data.message)
            }else {
              message.success('已成功添加商品')
            }
          })
          .then(() => {
            setTimeout(()=>{this.reloadPage()}, 300)
          });
      }
      const handleFormFeild = errorInfo => {
        console.log('触发了验证失败', errorInfo);
      }
      const { formLayout } = this.state;
      return (
        <div>
          <div className="title">
            <p>添加商品</p>
          </div>
          <Form 
            layout={formLayout} 
            onFinish={handleAddProduct} 
            onFinishFailed={handleFormFeild}
          >
            <Form.Item 
              label="名称" 
              name={'name'}
              rules={[{ required: true, message: '请添加商品名称' }]}
            >
              <Input placeholder="名称" onChange={this.handleName}/>
            </Form.Item>
            <Form.Item
              label="价格"
              name={'price'}
              rules={[{ required: true, message: '请指定商品价格'}, validateNumLength(4, 2) ]}
            >
              <Input type="number" step=".01" placeholder='价格' onChange={this.handlePrice}/>
            </Form.Item>
            <Form.Item
              label="单位"
              name={'unit'}
              rules={[{ required: true, message: '请指定商品的计费单位' }]}
            >
              <Input placeholder="单位" onChange={this.handleUnit}/>
            </Form.Item>
            <Form.Item
              label="图片"
              name={'image'}
              rules={[{ required: true, message: '请添加商品图片的链接' }]}
            >
              <Input placeholder="图片" onChange={this.handleImage}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit"
              disabled={!this.state.name || !this.state.price || !this.state.unit || !this.state.image} 
              >提交</Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
}

export default ProductForm;