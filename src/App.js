import "./App.css";
import Counter from "./Counter";
import Tap from "./FooPropTest";
import LoaderHi from "./LoaderHi";
import TestName from "./RenderName";
import PlayStop from "./StopPlay";
import TestForm from "./TitleInt";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <TestForm />
      <hr />
      <TestName />
      <hr />
      <Tap label="One" clickFunction={() => alert("CLICK ONE")} />
      <Tap
        label="Two"
        clickFunction={() => {
          console.log("Click two");
        }}
      />
      <Tap
        label="Tree"
        clickFunction={(params) => {
          console.log("THIS IS" + params);
        }}
      />
      <hr />
      <LoaderHi />
      <hr />
      <PlayStop />
    </div>
  );
}

export default App;
