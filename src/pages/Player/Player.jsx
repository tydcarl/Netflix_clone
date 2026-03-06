import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWQyYjAwNjYwMWFhN2Q3M2Y0NzI2NWM1OWM2N2U3YiIsIm5iZiI6MTc3MjgxNDU3MC45NTM5OTk4LCJzdWIiOiI2OWFiMDBlYWJiMjlkN2EzMGZhY2FlNTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ycO_BcblHG9ikDEN9ZkDxJdC6eEVIMalp4MaeOGTiJk",
    },
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/1290821/videos", options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
