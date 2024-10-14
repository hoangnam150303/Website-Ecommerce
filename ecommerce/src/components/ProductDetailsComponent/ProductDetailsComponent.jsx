import { Col, Image, Row } from 'antd'
import React from 'react'
import StarryNight from '../../assets/image/Starry-Night.jpg'
import StarryNightSmall from '../../assets/image/StarryNightSmall.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct,WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct } from './style'
import { StarFilled } from '@ant-design/icons';
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
            <Col span={14} >
              <div style={{marginLeft: '15px'}}>
              <WrapperStyleNameProduct>Starry Night - Van Gough</WrapperStyleNameProduct>
              <div>
              <StarFilled style={{ fontSize: '10px', color: 'orange', }}/>
              <StarFilled style={{ fontSize: '10px', color: 'orange', }}/>
              <StarFilled style={{ fontSize: '10px', color: 'orange', }}/>
              <WrapperStyleTextSell>| 100+ products sold</WrapperStyleTextSell>
              </div>
              </div>
              <WrapperPriceProduct>
                <WrapperPriceTextProduct >10000$</WrapperPriceTextProduct>
              </WrapperPriceProduct>
              <WrapperAddressProduct style={{marginLeft:"15px"}}>
                <span>Ship to </span>
                <span className='address'>408 Trung Nu Vuong street</span>
                <span className='changeAddress'>-change address</span>
              </WrapperAddressProduct>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent