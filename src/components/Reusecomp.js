import React from 'react';
const Reusecomp = (props) => {
    return <div className='container'>
       <span>{props.Datas.name}</span>
       <span>{props.Datas.email}</span>
       <span>{props.Datas.mno}</span>
        
    </div>;
}



export default Reusecomp;