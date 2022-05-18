import React, { useEffect, useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.thedogapi.com/v1/breeds");
      const json = await response.json();
      console.log({ json });
      setData(json);
    };
    fetchData();
  }, []);
  const filter = (searchBy) => {
    setSearch(searchBy);
  };

  return (
    <div className="MainPage">
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          filter(e.target.value);
        }}
        placeholder="Escribe algo"
      />
    </div>
  );
}

export default MainPage;
