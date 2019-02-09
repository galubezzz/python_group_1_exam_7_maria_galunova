import React from 'react';

function Item(props){
    return(
        <div>
            <button onClick={props.addItem}><i className="fas fa-utensils"></i>[{props.name}]: ${props.price}</button>
        </div>
    );
}

export default Item;