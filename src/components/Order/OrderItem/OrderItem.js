import React from 'react';

function OrderItem(props){
    return(
        <div>
           {props.name}: {props.count}шт x ${props.price} <span onClick={props.removeItem}><i className="fas fa-trash-alt"></i></span>
        </div>
    );
}

export default OrderItem;