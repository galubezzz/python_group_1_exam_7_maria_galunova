import React from 'react';

function Item(props){
    return(
        <div>
            [{props.name}]: ${props.price}
        </div>
    );
}

export default Item;