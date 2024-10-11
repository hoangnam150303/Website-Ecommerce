import React from 'react'
import { WrapperLableText, WrapperTextValue, WrapperContent } from './style'
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () => {
    const onChange = () => { };
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((options) => {
                    return (
                        <WrapperTextValue>{options}</WrapperTextValue>
                    )
                })

            case 'checkbox':
                return (<Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) => {

                        return (
                            <Checkbox style={{ marginLeft: '0px' }} value={option.value}>{option.lable}</Checkbox>
                        )

                    })}
                </Checkbox.Group>
                )

            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span>{`  from ${option} star`}</span>
                        </div>
                    )
                }
                )

            case 'price':
                return options.map((option) => {
                    return (
                        <div style={{ borderRadius: '10px', backgroundColor: '#ccc', width: 'fit-content', padding: '4px' }}>{option}</div>
                    )
                }
                )
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLableText>
                <h4>Lable</h4>
            </WrapperLableText>

            <WrapperContent>
                {renderContent('text', ['Abstract', 'Realism', 'Expression'])}
            </WrapperContent>

            <WrapperContent>
                {renderContent('checkbox',
                    [
                        { value: 'a', lable: 'A' },
                        { value: 'b', lable: 'B' }
                    ]
                )}
            </WrapperContent>

            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>

            <WrapperContent>
                {renderContent('price', ['lower than 400$', 'lower than 1000$', 'lower than 4000$'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent