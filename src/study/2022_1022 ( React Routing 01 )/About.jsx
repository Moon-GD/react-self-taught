// About.jsx
import queryString from "query-string";
export default function About() {
  // 1번 방법 : URLSearchParams 활용
  // 파싱해야 하는 String 읽어오기
  // const queryString = window.location.search;

  // URLSearchParams 객체 생성
  // let urlSearchParams = new URLSearchParams(queryString);

  // 찾고자 하는 Value의 Key 값 대입
  // let name = urlSearchParams.get("name");

  // ----------------------------------------------------
  // 2번 방법 : query-string 활용

  let string = window.location.search;
  let querySet = queryString.parse(string);  
  console.log(querySet);

  if (window.Worker) {
    return <h1>My Name : {querySet.name}</h1>;
  } else {
    // 진짜 웬만한 브라우저에서는 이 분기문으로 들어올 일은 진짜 진짜 없을 건데
    // 혹시나 해서 작성한 코드 ^^;
    return <></>;
  }
}
