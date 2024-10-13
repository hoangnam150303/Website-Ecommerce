import React from 'react'
import { Button } from 'antd';

const ButtonComponent = (props) => {
    const { type, textButton, styleButton, ...rests } = props;
    return (
        <Button style={styleButton} {...rests} type={type}>{textButton}</Button>
    )
}

export default ButtonComponent