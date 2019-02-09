import React from 'react';

function Item(props){
    return(
        <div>
            <button className="btn btn-outline-dark text-left" onClick={props.addItem}><i className="fas fa-utensils"></i> [{props.name}]: <span className="float-right">${props.price}</span></button>
        </div>
    );
}

export default Item;