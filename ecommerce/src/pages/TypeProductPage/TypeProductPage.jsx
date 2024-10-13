import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Row } from 'antd'
import { Pagination } from "antd";
import { WrapperProducts, WrapperNavbar } from './style'

const TypeProductPage = () => {
    const onChange = () => { }
    return (
        <div style={{ padding: "0 120px", background: "#efefef" }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4} >
                    <NavbarComponent />
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts span={20}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>
                    <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px'}} />
                </Col>
            </Row>

        </div>
    )
}

export default TypeProductPage