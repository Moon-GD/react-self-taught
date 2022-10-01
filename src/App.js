import './App.css';
import { useState } from 'react';  // color 정보 state로 활용하기 위해서 useState 가져오기
import ReactStrap from './part02/R034_ReactStrap';  // 하위 컴포넌트 가져오기
import { 
  Button, Badge,
  Card, CardBody, CardTitle, CardText 
} from 'reactstrap';

function App() {
  // 색깔 정보 state로 선언
  const [color, setColor] = useState('primary');
  
  // 클릭된 버튼 정보 state로 선언
  const [clicked, setClicked] = useState(new Set());

  // badge css object
  const invisible = {display:'none'};  // 안 보이게
  const visible = {};  // 보이게

  // 버튼 클릭에 대한 이벤트 핸들러
  const colorChange = (toChange, badgeOrder) => {
    // 바뀔 색깔의 이름을 인자로 받아서 setColor에게 넘겨준다.
    setColor(toChange);

    const badgeID = '#badge0' + badgeOrder  // badge ID 스트링
    let badge = document.querySelector(badgeID)  // ID에 맞는 badge 찾기
    badge.style = visible;  // badge 스타일링 변경
    
    // 클릭된 버튼 정보 추가 및 state 업데이트
    clicked.add(badgeOrder);
    setClicked(clicked);

    // 모든 버튼이 클릭되는 경우
    if(clicked.size == 5) {
      // 카드 팝업
      let card = document.querySelector('#card');
      card.style.display = '';
      card.style.width = '18rem';
    }
  }

  return (
    <>
      <ReactStrap colorName={color}></ReactStrap>
      <br/>
      <Button color="primary" onClick={() => {colorChange('primary', 1)}}>
        primary
        <Badge color="info" style={invisible} id="badge01">HIT</Badge>
      </Button> &nbsp;

      <Button color="secondary" onClick={() => {colorChange('secondary', 2)}}>
        secondary
        <Badge color="info" style={invisible} id="badge02">HIT</Badge>
      </Button> &nbsp;

      <Button color="success" onClick={() => {colorChange('success', 3)}}>
        success
        <Badge color="info" style={invisible} id="badge03">HIT</Badge>
      </Button> &nbsp;

      <Button color="danger" onClick={() => {colorChange('danger', 4)}}>
        danger
        <Badge color="info" style={invisible} id="badge04">HIT</Badge>
      </Button> &nbsp;

      <Button color="warning" onClick={() => {colorChange('warning', 5)}}>
        warning
        <Badge color="info" style={invisible} id="badge05">HIT</Badge>
      </Button> &nbsp;

      <Card style={{display:'none'}} id="card">
        <img alt="Sample" src="https://picsum.photos/300/200"/>
        <CardBody>
          <CardTitle tag="h3">
            Clear
          </CardTitle>

          <CardText>
            You Click All Buttons
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default App;