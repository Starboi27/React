import React from "react";
import "./App.css";

function Header(props) {
  //사용자 정의 태그 = component
  //props는 Object를 같는다
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const t = props.topics.map((t) => {
    return (
      <li key={t.id}>
        {" "}
        {/*REACT에서 자동으로 생성한 태그에는
      추척을 위한 Key값이 필요하다 */}
        <a href={"/read" + t.id}>{t.title}</a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{t}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App2() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  return (
    <div>
      {/*component에서도 속성 값을 사용할 수 있을 까?*/}
      {/*<img src="image.jpg" width="100" height="100">
      리액트에선 이런 값을 props이라 한다*/}
      <Header title="React" />
      <Nav topics={topics} />
      <Article title="welcome" body="hi web" />
    </div>
  );
}

export default App2;
