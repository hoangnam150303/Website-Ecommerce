import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPrice, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '100px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Starry Night</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span> 4.5 </span><StarFilled style={{ fontSize: '10px', color: 'orange', }} />
                </span>
                <span>| 100+ products sold</span>
            </WrapperReportText>
            <WrapperPrice >
                1.000$
                <WrapperDiscountText>-10%</WrapperDiscountText>
            </WrapperPrice>
        </WrapperCardStyle>
    )
}

export default CardComponent