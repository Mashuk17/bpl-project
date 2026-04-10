import bannerImg from "../../../assets/banner-main.png";
import bannerBg from "../../../assets/bg-shadow.png";
const Banner = () => {
  return (
    <div
      className="bg-black w-11/12 mx-auto rounded-4xl overflow-hidden bg-cover bg-center h-auto flex flex-col justify-between items-center space-y-5"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {" "}
      <img className="mt-10" src={bannerImg} alt="" />
      <h3 className="text-white text-3xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h3>
      <p className="text-white/50">Beyond Boundaries Beyond Limits</p>
      <button className="btn bg-yellow-400 mb-10">Claim Free Credit</button>
    </div>
  );
};

export default Banner;
