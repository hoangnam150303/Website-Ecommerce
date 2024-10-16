import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from "antd";
import { Button } from "antd";
const InputSearchComponent = (props) => {
    const { placeholder, size, textButton } = props
    return (
        <div style={{ display: 'flex'}}>
            <Input size={size} placeholder={placeholder} />
            <Button style={{ backgroundColor: "#724e27", color: '#fff' }} size={size} icon={<SearchOutlined />}>{textButton}</Button>
        </div>
    )
}

export default InputSearchComponent