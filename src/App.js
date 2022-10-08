import "./styles.css";
import React, { useState } from "react";

var Himachal = [
  {
    site: "Mcleodganj",
    rate: "4.5/5",
    url:
      "https://tse4.mm.bing.net/th?id=OIP.dlR8-KPD2Uwmhs35GtPE6AHaE8&pid=Api&P=0"
  },
  {
    site: "Shimla",
    rate: "4.8/5",
    url:
      "https://tse2.mm.bing.net/th?id=OIP.SwiU1bcVsqm6kVeU1V30jwHaE8&pid=Api&P=0"
  },
  {
    site: "Manali",
    rate: "4.7/5",
    url:
      "https://tse1.mm.bing.net/th?id=OIP.QEmT-3kOGVRjuV6s8bKkHQHaEK&pid=Api&P=0"
  }
];
var MP = [
  {
    site: "Indore",
    rate: "5/5",
    url:
      "https://www.indiaheritagewalks.org/sites/default/files/2020-08/3551_20190228103219.jpg"
  },
  {
    site: "Ujjain",
    rate: "4/5",
    url:
      "https://tse1.mm.bing.net/th?id=OIP.iAp_HZiWk4sA3_Px0CQ8rwHaEK&pid=Api&P=0"
  },
  {
    site: "Bhopal",
    rate: "4.2/5",
    url:
      "https://tse4.mm.bing.net/th?id=OIP.VuSgW-o9wHBBhTYkgijqpgHaEK&pid=Api&P=0"
  }
];
var Gj = [
  {
    site: "GandhiNagar",
    rate: "4.5/5",
    url:
      "https://tse3.mm.bing.net/th?id=OIP._g9FiWJuXOqv9bmtfM1vTQHaFj&pid=Api&P=0"
  },
  {
    site: "Surat",
    rate: "4/5",
    url:
      "https://tse2.mm.bing.net/th?id=OIP.0BpcBpSOvFbfqKaC4uvNfAHaEB&pid=Api&P=0"
  },
  {
    site: "Ahmedabad",
    rate: "4.7/5",
    url:
      "https://tse1.mm.bing.net/th?id=OIP.r9KeY49coZveACYDm0U4UAHaEK&pid=Api&P=0"
  }
];

export default function App() {
  const [val, setVal] = useState(Himachal);

  const clickHandle = (item) => {
    setVal(item);
  };

  return (
    <div className="App">
      <h1>✈️ Travelling</h1>
      <p>checkout my favourite places in india</p>
      <div>
        <button className="btn" onClick={() => clickHandle(Himachal)}>
          Himachal pradesh
        </button>
        <button className="btn" onClick={() => clickHandle(MP)}>
          Madhya pardesh
        </button>
        <button className="btn" onClick={() => clickHandle(Gj)}>
          Gujrat
        </button>
      </div>
      <hr />

      <div>
        <ul className="under">
          {val.map((item) => {
            return (
              <div className="ctn">
                <img className="img-i" src={item.url} alt="not available" />
                <span className="rate">{item.site}</span>
                <span className="rate">Rating :- {item.rate}</span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
