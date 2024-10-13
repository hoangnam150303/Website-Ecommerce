import React from 'react'
import { TypeProductComponent } from '../../components/TypeProductComponent/TypeProductComponent'
import { WrapperButtonShowMore, WrapperProducts, WrapperTypeProduct } from './style'
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
        <div id="container" style={{ backgroundColor: ' #e0e0eb', padding: '0, 120px', width: '1000px' }}></div>
        <SliderComponent arrImages={[slider1, slider2]} />

        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div style={{ width: '100%', display: 'flex', marginTop: '10px', justifyContent: "center" }}>
          <WrapperButtonShowMore type="outline" textButton="Show All" styleButton={{
            backgroundColor: "lightBlue", width: "100px", height: "30px", color: "white", fontWeight: 500
          }} />
        </div>
        <NavbarComponent />
      </div>
    </>
  )
}

export default HomePage