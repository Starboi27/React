import { use, useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [texts, setTexts] = useState("");

  const [newTexts, setNewTexts] = useState("");
  const [edit, setEdit] = useState(null);

  const delTodo = (props) => {
    const delList = todo.filter((item) => props != item.id);
    {
      /*배열에 특정 항목을 제외한 새로운 배열을 만드는 코드
      .filter 함수 내부에 조건이 맞는 요소만 새로운 배열 생성*/
    }
    setTodo(delList);
  };

  const editTodo = (props) => {
    const edit = todo.map((item) => {
      return item.id === props ? { ...item, value: newTexts } : item;
    });
    setTodo(edit);
    setEdit("");
  };

  return (
    <div>
      <header>
        <h1>Todolist</h1>
      </header>
      <div>
        <form
          onSubmit={(e) => {
            {
              /*onSubmit 함수는 form 태그 안에 있는
              태그에 사용자가 입력한 데이터를 2가지 방식으로 모은다
              1. 브라우저 방식
                - 제출하면 페이지가 새로로침되면서 브라우저가 직접 데이터를 보낸다
                - e.preventDefault 함수를 사용했기에 2번 방식을 사용
              2. React에 useState 방식
                - state(상태로)로 데이터를 객체형태로 저장한다
              */
            }
            e.preventDefault();
            {
              /*form 제출 시 페이지가 새로고침 되는 것을 방지할 뿐만 아니라
              데이터를 브라우저로 전송하는 것도 막는다*/
            }
            const object = { id: Date.now(), value: texts };
            {
              /*유지보수하기 용이하게 객체형태로 데이터 저장
              Date.now : 현재 시간을 밀리초 0.001 단위로 가져온다
              value : input에 입력한 데이터를 저장*/
            }

            if (texts.trim() == "") {
              //trim : 텍스트 데이터에 공백을 제거
              alert("텍스트를 입력해주세요");
            } else {
              setTodo([...todo, object]);
              // ...todo 전개 연산자를 사용해 배열에 있는 데이터를 하나씩 꺼낸다
            }
            setTexts("");
          }}
        >
          <input
            value={texts}
            onChange={(e) => {
              setTexts(e.target.value);
              {
                /*onChange는 콜백함수 사용자가 직접 호출하는 게 아니라
              브라우저가 글자를 입력한 event가 발생하면 이 함수를 실행한다*/
              }
            }}
            type="text"
            placeholder="할일을 입력하세요"
          ></input>
          <span>
            <button>Click</button>
          </span>
        </form>
        <ul>
          {/*
          todo.map : 배열에 있는 데이터를 하나씩 꺼낸다
          item : todo 배열에 저장되 있던 객체 데이터이다
          */}
          {todo.map((item) => (
            <li key={item.id}>
              {edit === item.id ? (
                <input
                  type="text"
                  value={newTexts}
                  onChange={(e) => setNewTexts(e.target.value)}
                />
              ) : (
                item.value
              )}
              <span>
                {edit === item.id ? (
                  <button onClick={() => editTodo(item.id)}>저장</button>
                ) : (
                  <button
                    onClick={() => {
                      setEdit(item.id);
                      setNewTexts(item.value);
                    }}
                  >
                    수정
                  </button>
                )}
                <button onClick={() => delTodo(item.id)}>삭제</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
