import React from 'react';

function Item(props){
    return(
        <div>
            <button className="btn btn-outline-dark text-left" onClick={props.addItem}><i className="fas fa-utensils"></i> [{props.name}]: ${props.price}</button>
        </div>
    );
}

export default Item;