import React from 'react';

function Item(props){
    return(
        <div>
            <button onClick={props.addItem}>[{props.name}]: ${props.price}</button>
        </div>
    );
}

export default Item;