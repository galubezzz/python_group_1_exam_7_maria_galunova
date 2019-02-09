import React from 'react';

function OrderItem(props){
    let price = 0;
    if (props.count>0){
        price = props.total / props.count;
    }
    return(
        <div className="text-left">
           {props.label()}: {props.count}шт x ${price} = ${props.total} <span className="float-right" onClick={props.removeItem}><i className="fas fa-trash-alt"></i></span>
        </div>
    );
}

export default OrderItem;