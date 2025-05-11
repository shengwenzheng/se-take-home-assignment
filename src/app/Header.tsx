"use client"
import dynamic from 'next/dynamic';
import Link from 'next/link';


const Index = () => {
    return <div>
        <Link href='/' className='mr-[10px]'>首页</Link>
        <Link href='order'>订单列表</Link>
    </div>
}

export default Index;
