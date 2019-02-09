import React from 'react';
import Item from './Item/Item'

function ItemsForm(props){
    return(
         <div>
             {props.items.map(item => <Item name = {item.label} price = {item.price} addItem={() => {props.addItem(item.name)}}/>)}
        </div>
        );
}

export default ItemsForm;
