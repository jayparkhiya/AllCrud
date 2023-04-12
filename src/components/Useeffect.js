import React, { useEffect, useState } from "react";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 *
 */
const Useeffect = () => {
  const [count, setCount] = useState(100);
  const [data,setData] = useState(10);
  useEffect(() => {
    console.log("Its Useeffect for data");
  },[data]);

  useEffect(() => {
    console.log("Its Useeffect for count");
  },[count]);
  return (
    <div>
      <p>Hello Use Effect </p>
      <h1>count: {count}</h1>
      <h1>data: {data}</h1>
      <button onClick={() => {setCount(count+1)}}>Update count </button>
      <button onClick={() => {setData(data+1)}}>Update data</button>

    </div>
  );
};

// Useeffect.propTypes = propTypes;
// Useeffect.defaultProps = defaultProps;
// #endregion

export default Useeffect;
