import { Col, Image, Row } from "antd";
import React from "react";
import StarryNight from "../../assets/image/Starry-Night.jpg";
import StarryNightSmall from "../../assets/image/StarryNightSmall.webp";
import {
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius:"4px" }}>
      <Col
        span={10}
        style={{ border: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={StarryNight} alt="image-StarryNight" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={StarryNightSmall}
              alt="image-StarryNight"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={StarryNightSmall}
              alt="image-StarryNight"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={StarryNightSmall}
              alt="image-StarryNight"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={StarryNightSmall}
              alt="image-StarryNight"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={StarryNightSmall}
              alt="image-StarryNight"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={StarryNightSmall}
              alt="image-StarryNight"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <div style={{ marginLeft: "15px" }}>
          <WrapperStyleNameProduct>
            Starry Night - Van Gough
          </WrapperStyleNameProduct>
          <div>
            <StarFilled style={{ fontSize: "10px", color: "orange" }} />
            <StarFilled style={{ fontSize: "10px", color: "orange" }} />
            <StarFilled style={{ fontSize: "10px", color: "orange" }} />
            <WrapperStyleTextSell>| 100+ products sold</WrapperStyleTextSell>
          </div>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>10000$</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct style={{ marginLeft: "15px" }}>
          <span>Ship to </span>
          <span className="address">408 Trung Nu Vuong street</span>
          <span className="changeAddress">-change address</span>
        </WrapperAddressProduct>
        <div
          style={{
            marginLeft: "15px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #ccc",
          }}
        >
          <div>Quality</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined
                style={{ color: "black", fontSize: "20px" }}
                size="10px"
              />
            </button>
            <WrapperInputNumber
              size="small"
              defaultValue={3}
              onChange={onChange}
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined
                style={{ color: "black", fontSize: "20px" }}
                size="10px"
              />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={20}
            styleButton={{
              background: "rgb(255, 57, 69)",
              color: "white",
              margin: "15px",
              height: "48px",
              width: "220px",
              fontSize: "15px",
              fontWeight: "700",
            }}
            textButton="Choose buy"
          />
          <ButtonComponent
            size={40}
            bordered={false}
            styleButton={{
              background: "white",
              color: "rgb(13, 92, 182)",
              fontSize: "15px",
              margin: "15px",
              fontWeight: "700",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13, 92, 182)",
            }}
            textButton="Buy pay later"
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
