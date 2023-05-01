'use client'
import { useState, useEffect } from "react";

export default function Startup(props) {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('../api/post');
      const data = await res.json();
      setStartups(data);
    }
    fetchData();
  }, []);

  return (
    <div className="border-2 rounded p-6 w-full flex flex-wrap-reverse justify-between items-center">
      { startups.map((startup) => (
        <div key={startup.id} className="bg-white rounded-lg p-2 my-2 flex flex-col w-[300px] h-36 ring-2 max-[400px]:w-full">
          <h2 id="Nom" className="text-black font-bold text-lg place-self-start ">{startup.projectName}</h2>
          <p id="description" className="text-black font-thin text-s italic">{startup.description}</p>
        </div>
      ))}
    </div>
  );
}