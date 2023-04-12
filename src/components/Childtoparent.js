import React from 'react';

const Childtoparent = (props) => {
    const data=['jay' ,'shubham']
    return <div>
        <h1>Names:{props.alert(data)}{data}</h1>
    </div>
}


export default Childtoparent;