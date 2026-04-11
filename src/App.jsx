import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";

const playersPromise = fetch("playersData.json").then((res) => res.json());
function App() {
  const [coin, setCoin] = useState(500000);
  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense fallback={<p>data loading......</p>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
