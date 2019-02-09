import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order(props){
    const newItems = props.items.filter(item => item.count>0);
    let message = "Please select the ingredients for your Poke!";

    if (newItems.length>0){
        return(
        <div className="col-md-6 rounded border border-dark block">
            Order Details:
            {newItems.map(
                item => <OrderItem name={item.name} total={item.total} count={item.count} removeItem ={()=>{props.removeItem(item.name)}} />
            )}
            Total: {props.total}
        </div>
    );
    }
    else {
        return(
            <div className="col-md-6 rounded border border-dark block">
                {message}
            </div>
        )

    }
}

export default Order;