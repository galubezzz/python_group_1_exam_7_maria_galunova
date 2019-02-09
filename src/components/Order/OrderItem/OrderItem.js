import React from 'react';

function OrderItem(props){
    return(
        <div>
           {props.name}: {props.count}шт x ${props.price} <button onClick={props.removeItem}>Удалить</button>
        </div>
    );
}

export default OrderItem;