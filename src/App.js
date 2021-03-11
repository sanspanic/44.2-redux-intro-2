import "./App.css";
import Form from "./Form";
import MemeWrapper from "./MemeWrapper";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const addMeme = (formData) => {
    dispatch({ type: "CHANGE_TEXT", payload: formData.text });
    dispatch({ type: "CHANGE_SRC", payload: formData.src });
  };
  return (
    <div className="App">
      <h1 className="bg-indigo-100 text-4xl font-bold p-10 border-b-8 border-indigo-600 text-yellow-500">
        Meme Generator
      </h1>
      <Form addMeme={addMeme} />
      <MemeWrapper />
    </div>
  );
}

export default App;
