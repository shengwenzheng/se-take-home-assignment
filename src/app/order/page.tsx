"use client"
import dynamic from 'next/dynamic';
import { Button,Table } from 'antd';
import {useOrder}  from '@/stores/order';
import moment from 'moment';


const Index = () => {
    const {orderList,change,delRobot} = useOrder();
      const columns = [
        {
            title: '订单名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '订单类型',
            dataIndex: 'type',
            key: 'type',
            render: (text: number) => {
                return text == 1 ? '普通订单' : 'VIP订单'
            }
        },
        {
            title: '创建时间',
            dataIndex: 'time',
            key: 'time',
            render: (text: number) => {
                return moment(text).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text: number) => {
                return text == 0 ? '未完成' : <span className='text-[green]'>已完成</span>
            }
        },
    ];
    
    const sortedData = orderList
        .slice() // 创建副本以避免直接修改原数组
        .sort((a, b) => {
            if (a.type === b.type) {
                // 如果订单类型相同，按时间倒序排列
                return  a.time - b.time;
            }
            // VIP订单 (type=2) 排在普通订单 (type=1) 前面
            return b.type - a.type;
        })
        .map((item, index) => ({
            ...item,
            key: index,
        }));
    return <div>
        <Table dataSource={sortedData} columns={columns} pagination={false}/>
        <div className='mt-[20px]'>
            <Button type='primary' className='mr-[10px]' onClick={change}>+ robot</Button>
            <Button type='primary' onClick={delRobot}>- robot</Button>
        </div>
    </div>
}

export default Index;
