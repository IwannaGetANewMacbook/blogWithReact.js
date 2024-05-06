/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // 변수 part
  const logo = "ReactBlog";

  let post = "Blog Title";

  // state part
  let [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
    "대구 동성로 카페 추천",
  ]);

  let [titleStatus, setTitleStatus] = useState(0);

  let [like, setLike] = useState(title.map(() => 0));

  let [modal, setModal] = useState(false);

  let [input, setInput] = useState("");

  const timeStamp = new Date();

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          setTitle(copy.sort());
        }}
      >
        가나다순정렬
      </button>

      {title.map((v, i, a) => (
        <div className="list" key={i}>
          <h4
            onClick={() => {
              setModal(!modal);
              setTitleStatus(i);
            }}
            style={{ cursor: "pointer" }}
          >
            {v}{" "}
            <button
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...like];
                copy[i] += 1;
                setLike(copy);
              }}
              style={{ border: "none", background: "white", cursor: "pointer" }}
            >
              👍
            </button>
            {like[i]}
          </h4>
          <p>{timeStamp.toLocaleDateString("kr")} 발행</p>
          <button
            onClick={() => {
              let copy = [...title];
              copy.splice(i, 1);
              setTitle(copy);
              let copyLike = [...like];
              copyLike.splice(i, 1);
              setLike(copyLike);
            }}
          >
            삭제
          </button>
        </div>
      ))}
      {modal ? (
        <Modal
          title={title}
          setTitle={setTitle}
          titleStatus={titleStatus}
          color="skyblue"
        ></Modal>
      ) : null}
      <br />

      <form action="">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (input === "") {
              alert("1글자 이상 입력해주세요");
              return false;
            } else {
              let copy = [...title];
              copy.unshift(input);
              setTitle(copy);
              let copyLike = [...like];
              copyLike.unshift(0);
              setLike(copyLike);
            }
          }}
        >
          전송
        </button>
      </form>
      <h4>{post}</h4>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.title[props.titleStatus]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
