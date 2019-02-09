import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order(props){
    const newItems = props.items.filter(item => item.count>0);
    return(
        <div>
            Order Details:
            {newItems.map(
                item => <OrderItem name={item.name} price={item.price} count={item.count} removeItem ={()=>{props.removeItem(item.name)}} />
            )}
            Total: {props.total}
        </div>
    );
}

export default Order;