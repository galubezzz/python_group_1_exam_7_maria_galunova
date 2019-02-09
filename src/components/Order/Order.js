import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order(props){
    return(
        <div>
            <OrderItem name='coffee' price={20} count={3} />
        </div>
    );
}

export default Order;