import { use, useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";
const Players = ({ playersPromise, coin, setCoin }) => {
  const playersData = use(playersPromise);
  const [playerStatus, setPlayerStatus] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between w-10/12 mx-auto my-5 items-center">
        {playerStatus === "available" ? (
          <h2 className="text-2xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-2xl font-bold">
            Selected Players({selectedPlayers.length}/{playersData.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => setPlayerStatus("available")}
            className={`btn ${playerStatus === "available" ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setPlayerStatus("selected")}
            className={`btn ${playerStatus === "selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {playerStatus === "available" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {playersData.map((player, index) => (
              <AvailablePlayers
                key={index}
                player={player}
                coin={coin}
                setCoin={setCoin}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
              ></AvailablePlayers>
            ))}
          </div>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
