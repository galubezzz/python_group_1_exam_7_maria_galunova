import React from 'react';

function OrderItem(props){
    return(
        <div>
           {props.name}: {props.count}шт x ${props.price}
        </div>
    );
}

export default OrderItem;