"use client"
import dynamic from 'next/dynamic';
import { Button,Form,Input,Select } from 'antd';
import { useState } from 'react';
import {useOrder}  from '@/stores/order';


const Index = () => {
    const [form] = Form.useForm();
    const {orderList,add} = useOrder();

    const create = () => {
        form.validateFields().then((values) => {
            add(values)
            form.resetFields();
        }).catch((err) => {
            console.log(err);
        })
    }
    return <div>
        <Form
        form={form}
        onFinish={create}
        >
            <Form.Item 
            label="订单名称"
            name="name"
            rules={[{ required: true, message: '请输入订单名称' }]}
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item 
            name='type'
            label="订单类型"
            rules={[{ required: true, message: '请选择订单类型' }]}
            >
                <Select>
                    <Select.Option value="1">普通订单</Select.Option>
                    <Select.Option value="2">VIP订单</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' className='mr-[10px]' htmlType='submit'>新建订单</Button>
            </Form.Item>
        </Form>
    </div>
}

export default Index;
