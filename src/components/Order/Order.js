import React from 'react';
import OrderItem from './OrderItem/OrderItem'

function Order(props){
    const newItems = props.items.filter(item => item.count>0);
    let message = "Пожалуйста выберите ингредиенты для вашего Поке!";

    if (newItems.length>0){
        return(
        <div className="col-md-5 form-group rounded border border-dark block">
            Ваш поке:
            {newItems.map(
                item => <OrderItem name={item.name}
                                   label={()=>props.label(item.name)}
                                   total={item.total}
                                   count={item.count}
                                   removeItem ={()=>{props.removeItem(item.name)}} />
            )}
            Total: ${props.total}
        </div>
    );
    }
    else {
        return(
            <div className="col-md-5 form-group rounded border border-dark block">
                {message}
            </div>
        )

    }
}

export default Order;