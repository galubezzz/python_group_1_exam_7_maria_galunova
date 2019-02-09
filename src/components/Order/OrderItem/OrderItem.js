import React from 'react';

function OrderItem(props){
    return(
        <div>
           <button>{props.name}{props.price}{props.count}</button>
        </div>
    );
}

export default OrderItem;