import { useState } from "react";
let data = [
  {
    id: 0,
    title: "What's your name ?",
    answer: "Anjan",
  },
  {
    id: 1,
    title: "What's your favorite animal",
    answer: "Girrafe",
  },
];

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} id="toggle-btn">
      {children}
    </button>
  );
}

function App() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId((selectedId) => (selectedId !== id ? id : null));
  }
  return (
    <div id="container">
      {data.map((item) => (
        <div
          style={
            selectedId === item.id ? { borderTop: "2px solid green" } : null
          }
          className={`accordion ${item.id}`}
        >
          <section id="title">
            <p>{item.title}</p>
            <Button onClick={() => handleClick(item.id)}>
              {selectedId === item.id ? "-" : "+"}
            </Button>
          </section>
          {selectedId === item.id && <p id="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;
