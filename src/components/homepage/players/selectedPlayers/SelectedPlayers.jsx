import { Trash2 } from "lucide-react";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleRemove = (player) => {
    setCoin((prev) => prev + player.price);
    const updatedList = selectedPlayers.filter((p) => p.name !== player.name);
    setSelectedPlayers(updatedList);
  };
  return (
    <div className="space-y-3">
      {selectedPlayers.length === 0 ? (
        <p>No player selected</p>
      ) : (
        selectedPlayers.map((player, index) => (
          <div key={index} className="flex justify-between w-11/12 mx-auto ">
            <div className="flex gap-3 items-center">
              <div>
                <img className="w-10 h-10 rounded-xl" src={player.img} alt="" />
              </div>
              <div>
                <h2>{player.name}</h2>
                <h2>{player.type}</h2>
              </div>
            </div>
            <div onClick={() => handleRemove(player)} className="btn">
              <Trash2></Trash2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
