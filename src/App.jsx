import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const thingsArray = ["Thing 1", "Thing 2"];

  /**
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button
   */
  const data = thingsArray((item) => {
    console.log(item);
  });
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
