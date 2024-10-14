import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColImage = styled(Col)`
   flex-basis: unset;
   display: flex;
`

export const WrapperStyleNameProduct = styled.h1`
    margin: 0px 0px 4px;
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300px;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`

export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
   font-size: 32px;
   line-height: 40px;
   margin-right: 8px;
   font-weight: 500;
   padding: 10px;
   margin-top: 10px;
   margin-left: 15px;
`

export const WrapperAddressProduct = styled.div`
  span.address{
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl;
  };
  span.changeAddress{
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    flex-shrink: 0;
  }
`