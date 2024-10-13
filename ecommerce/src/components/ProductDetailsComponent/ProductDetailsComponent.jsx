import { Col, Image, Row } from 'antd'
import React from 'react'
import StarryNight from '../../assets/image/Starry-Night.jpg'
import StarryNightSmall from '../../assets/image/StarryNightSmall.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style'

const ProductDetailsComponent = () => {
    return (
        <Row style={{ padding: '16px', background: "#fff" }} >
            <Col span={10}>
                <Image src={StarryNight} alt='image-StarryNight' preview={false} />
                <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={StarryNightSmall} alt='image-StarryNight' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={StarryNightSmall} alt='image-StarryNight' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={StarryNightSmall} alt='image-StarryNight' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={StarryNightSmall} alt='image-StarryNight' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={StarryNightSmall} alt='image-StarryNight' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={StarryNightSmall} alt='image-StarryNight' preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14}>col-4</Col>
        </Row>
    )
}

export default ProductDetailsComponent