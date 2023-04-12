import React from "react";
import Reusecomp from "./Reusecomp";

const Newapp = () => {
  const Students = [
    {
      name: "jay",
      email: "jay@gmail.com",
      mno: "7048303687",
    },
    {
      name: "fenil",
      email: "fenil@gmail.com",
      mno: "7048303687",
    },
    {
      name: "yash",
      email: "yash@gmail.com",
      mno: "7048303687",
    },
  ];
  return (
    <div>
      {Students.map((items,h) => {
        return <Reusecomp Datas={items} />;
      })}
    </div>
  );
};

export default Newapp;
