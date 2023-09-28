import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <div className="main">

      <h1>Praktikum RPLBK - Modul 4</h1>
      <h1>Kelompok 08</h1>

        <Card></Card>
       
      
      </div>
    </>
  );
}

export default App;
