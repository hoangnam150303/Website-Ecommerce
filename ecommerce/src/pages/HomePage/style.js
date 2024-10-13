import styled from "styled-components"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-contend: flex-start;
    border-bottom: 1px solid red;
    font-size: 20px;
    height:44px;
`

export const WrapperButtonShowMore = styled(ButtonComponent)`

    &:hover{
        color: white;
        background:white;
        span{
            color: white;
        }
    }
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`