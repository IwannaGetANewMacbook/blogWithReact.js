/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "Blog Title";
  let [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState(0);
  const logo = "ReactBlog";
  let [modal, setModal] = useState(false);
  let fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트 추천";
          setTitle(copy);
        }}
      >
        변경
      </button>
      {/* <div className="list">
        <h4>
          {title[0]}
          <button
            onClick={() => {
              setLike(like + 1);
            }}
            style={{ border: "none", background: "white", cursor: "pointer" }}
          >
            👍
          </button>
          {like}
        </h4>
        <p>4월 26일 발행</p>
      </div>
      <div
        className="list"
        onClick={() => {
          if (modal === false) {
            setModal(true);
          } else if (modal === true) {
            setModal(false);
          }
        }}
      >
        <h4>{title[2]}</h4>
        <p>4월 26일 발행</p>
      </div>
      {modal === true ? <Modal></Modal> : null} */}

      {title.map((v, i, a) => (
        <div
          className="list"
          key={i}
          onClick={() => {
            setModal(!modal);
          }}
        >
          <h4>
            {v}{" "}
            <button
              onClick={() => {
                setLike(like + 1);
              }}
              style={{ border: "none", background: "white", cursor: "pointer" }}
            >
              👍
            </button>
            {like}
          </h4>
          <p>4월 26일 발행</p>
          {modal ? <Modal></Modal> : null}
        </div>
      ))}
      <h4>{post}</h4>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
