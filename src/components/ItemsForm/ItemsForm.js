import React from 'react';
import Item from './Item/Item'

function ItemsForm(props){
    return(
         <div className="col-md-6">
             {props.items.map(item => <Item name = {item.label} price = {item.price} addItem={() => {props.addItem(item.name)}}/>)}
        </div>
        );
}

export default ItemsForm;
