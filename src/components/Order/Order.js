import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order(props){
    return(
        <div>
            Order Details:
            {props.items.map(
                item => <OrderItem name={item.name} price={item.price} count={item.count} removeItem ={()=>{props.removeItem(item.name)}}/>
            )}

        </div>
    );
}

export default Order;