import React from 'react';

function Item(props){
    return(
        <div>
            <button>[{props.name}]: ${props.price}</button>
        </div>
    );
}

export default Item;