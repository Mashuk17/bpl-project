import { use } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div>
      <AvailablePlayers></AvailablePlayers>
    </div>
  );
};

export default Players;
