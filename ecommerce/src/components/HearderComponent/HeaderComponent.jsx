import React from 'react';
import { Col } from 'antd';
import { FormatPainterFilled } from '@ant-design/icons';
import Search from 'antd/es/transfer/search';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';

import { WrapperHeader, WrapperIconHeader } from './style';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperIconHeader>
                        Hunt Painting <FormatPainterFilled />
                    </WrapperIconHeader>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search" size="large" loading />
                </Col>
                <Col span={6} >
                    <div>
                        <UserOutlined />
                        <div>
                            <span>Login/Register</span>
                            <div>
                                <span>Account</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent