import { Flag, User } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const AvailablePlayers = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const handleSetCoin = (price) => {
    if (coin - price >= 0) {
      setCoin(coin - price);
    } else {
      toast("not enough coin to purchase");
      return;
    }
    setSelected(true);
    toast(`${player.name} is selected`);
    setSelectedPlayers((prev) => [...prev, player]);
    // console.log(selectedPlayers);
  };
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-sm p-4 text-xl">
          <figure className="rounded-2xl">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <User></User>
              {player.name}
            </h2>
            <div className="flex justify-between">
              <p className="flex gap-2 text-xl text-black/50">
                <Flag></Flag> {player.country}
              </p>
              <button className="btn btn-ghost">{player.type}</button>
            </div>
            <div className="divider"></div>
            <p className="text-xl font-bold">Rating: {player.rating}</p>
            <div className=" flex justify-between">
              <p className="font-bold">{player.batting_style}</p>
              <p className="text-right">{player.bowling_style}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl font-bold">Price:{player.price}</p>
              <button
                onClick={() => {
                  handleSetCoin(player.price);
                }}
                disabled={selected}
                className="btn"
              >
                {selected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
