import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageSignIn from "../../assets/image/logo-signIn.jpg";

const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Hello my friend</h1>
          <p style={{ color: "rgb(179, 89, 0)" }}>Login And Create Account</p>
          <InputFormComponent
            style={{ marginBottom: "10px", width: "75%", marginLeft: "13%" }}
            placeHolder="abc@gmail.com"
          />
          <InputFormComponent
            placeHolder="password"
            style={{ width: "75%", marginLeft: "13%" }}
          />
          <ButtonComponent
            size={20}
            styleButton={{
              background: "rgb(179, 89, 0)",
              color: "white",
              margin: "15px",
              marginLeft: "135px",
              height: "48px",
              width: "220px",
              fontSize: "15px",
              fontWeight: "700",
            }}
            textButton="Login"
          ></ButtonComponent>
          <div style={{ justifyItems: "left", margin: "0 40%  0 0" }}>
            <p>
              <WrapperTextLight>Forget Password! </WrapperTextLight>
            </p>
            <p>
              You don't have any account
              <WrapperTextLight> Create Account</WrapperTextLight>
            </p>
          </div>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageSignIn}
            preview={false}
            alt="image-logo"
            height="100%"
            width="100%"
          />
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
