import React, { useState } from "react";
import database from '../db.json'
import { json } from "react-router-dom";

export default function Ourcoffee() {
  console.log(database.coffee)
  const [countryState, setCountryState] = useState([]);
  return (
    <div>
      <button
      style={countryState.includes("Brazil")?{fontWeight:"800", color:"red"}:null}
        onClick={() => {
          const indexCountry = countryState.findIndex( (item)=> item=== "Brazil");
          if (indexCountry === -1) {
            setCountryState([...countryState, "Brazil"]);
          } else {
            const left = [...countryState.slice(0, indexCountry)];
            const right = [...countryState.slice(indexCountry + 1)];

            setCountryState([...left, ...right]);
          }
        }}
      >
        Brazil
      </button>
      ;
      <button
      style={countryState.includes("Kenya")?{fontWeight:"800", color:"Blue"}:null}
       onClick={() =>{const indexCountry = countryState.findIndex((item)=> item==="Kenya");
          if (indexCountry === -1) {
            setCountryState([...countryState, "Kenya"]);
          } else {
            const left = [...countryState.slice(0, indexCountry)];
            const right = [...countryState.slice(indexCountry + 1)];

            setCountryState([...left, ...right]);
          }}}>
        Kenya
      </button>
      ;
      <button
      style={countryState.includes("Columbia")?{fontWeight:"800", color:"Yellow"}:null}
      onClick={() => {const indexCountry = countryState.findIndex((item)=> item==="Columbia");
          if (indexCountry === -1) {
            setCountryState([...countryState, "Columbia"]);
          } else {
            const left = [...countryState.slice(0, indexCountry)];
            const right = [...countryState.slice(indexCountry + 1)];

            setCountryState([...left, ...right]);
          }}}>
        Columbia
      </button>
      ;
      {database.coffee.filter((item)=> countryState.includes(item.country) ).map((item)=>{ 
return  <div>
  <h2>{item.name}</h2>
  <h2>{item.country}</h2>
  <img src={item.url}></img>
  <h2>{item.price}</h2>
</div>

      })}
    </div>
  );
}
