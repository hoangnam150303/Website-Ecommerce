import React from 'react'
import { TypeProductComponent } from '../../components/TypeProductComponent/TypeProductComponent'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
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

        <div class="card-product" style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "30px" }}>
          <CardComponent />
        </div>
        <NavbarComponent />
      </div>
    </>
  )
}

export default HomePage