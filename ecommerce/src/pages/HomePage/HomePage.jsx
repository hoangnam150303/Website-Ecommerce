import React from 'react'
import { TypeProductComponent } from '../../components/TypeProductComponent/TypeProductComponent'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
const HomePage = () => {
  const arr = ['Abstract', 'Realism', 'Expressionism', 'Impressionism', 'Pop art']
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProductComponent name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
        <div id="container" style={{ backgroundColor: ' #e0e0eb', padding: '0, 120px' }}></div>
        <SliderComponent arrImages={[slider1, slider2]} />
      </div>
    </>
  )
}

export default HomePage