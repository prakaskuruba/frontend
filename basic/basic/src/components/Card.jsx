import React, { useState } from "react";
import "./Card.css";
import Btn from "./Btn";

export const Card = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://backend-dj3g.onrender.com/fruits");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      console.log(responseData)
      let r=responseData.fruits;
      setData(r);
      console.log(responseData.Message)
      console.log(responseData.fruits)
      setError(null); // Reset error state if fetch is successful
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message); // Set error message in state
    }
  };

  return (
    <>
      <div className="card">
        <div className="align">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <h1>HOVER ME</h1>

        <p>
          {data ? data.someProperty : "Loading..."}
        </p>
        <p>{data}</p>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>
      <br />
     <br />
     <Btn onClick={fetchData}/>
    </>
  );
};

export default Card;
