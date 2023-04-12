import React, { useState, useMemo } from "react";

const Usemeno = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  const multicountmemo = useMemo(() => {
    console.log("This Will Call When clicked on Data");
    return count * 2;
  }, [count]);
  return (
    <div>
      <p>Hello Use Memo Hook </p>
      <h1>count: {count}</h1>
      <h1>data: {data}</h1>
<h1>Count*2= {multicountmemo}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update count{" "}
      </button>
      <button
        onClick={() => {
          setData(data * 10);
        }}
      >
        Update data
      </button>
    </div>
  );
};

export default Usemeno;
