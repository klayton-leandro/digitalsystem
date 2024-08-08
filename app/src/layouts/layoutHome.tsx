import { Header, HeadersProps } from 'components'

import { Layout } from "antd"
import React from 'react'
import Footer from 'components/footer'


interface LayoutHomeProps {
    links: HeadersProps["links"]
    children: React.ReactNode
}

export default function layoutHome({ children, links }: LayoutHomeProps) {
    return (
        <>
        <Layout className='flex flex-col min-h-screen'>
            <Header {...{ links }} /> 
                <main className='flex-grow mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
                    {children}
                </main>
            <Footer />
        </Layout>
    </>
    )
}
