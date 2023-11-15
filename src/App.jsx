import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <Header />
      <div className="main_div">
        <Meme />
      </div>
    </>
  );
}

export default App;
