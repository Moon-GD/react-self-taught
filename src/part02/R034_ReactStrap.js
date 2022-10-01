import React from "react";
import { Alert } from 'reactstrap';  // Alert import 해준다.
import 'bootstrap/dist/css/bootstrap.min.css';  // reactstrap을 활용하기 위한 css 파일

// 상위 컴포넌트에서 색깔 정보를 전달받는 함수형 컴포넌트
const ReactStrap = (props) => {
  return (
    <>
      <Alert color = {props.colorName}>Alert</Alert>
      현재 색깔은 {props.colorName} 입니다.
      <br/>
    </>
  )
}

export default ReactStrap;