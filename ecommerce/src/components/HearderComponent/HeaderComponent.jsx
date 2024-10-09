import React from 'react';
import { Col } from 'antd';
import { FormatPainterFilled } from '@ant-design/icons';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperHeader, WrapperIconHeader, WrapperHeaderAccount, WrapperHeaderShoppingCart } from './style';
import InputSearchComponent from '../InputSearchComponent/InputSearchComponent';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader >
                <Col span={6}>
                    <WrapperIconHeader>
                        Hunt Painting <FormatPainterFilled />
                    </WrapperIconHeader>
                </Col>
                <Col span={12}>
                    <InputSearchComponent
                        size="large"
                        placeholder="Input search text"
                        textButton="Search"

                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px' }} >
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div style={{ fontSize: '15px', paddingLeft: '15px' }}>
                            <span>Login/Register</span>
                            <div>
                                <span >Account</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <WrapperHeaderShoppingCart >
                        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                        <span style={{ fontSize: '15px', paddingLeft: '5px' }}>Shopping Cart</span>
                    </WrapperHeaderShoppingCart>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent