import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";

const playersPromise = fetch("playersData.json").then((res) => res.json());
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<p>data loading......</p>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
