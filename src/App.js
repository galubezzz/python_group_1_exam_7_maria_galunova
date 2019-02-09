import React, { Component } from 'react';
import './App.css';
import Order from './components/Order/Order';
import ItemsForm from './components/ItemsForm/ItemsForm';

const availableItems = [
  {name: 'rice', price: 80, label: 'Рис'},
  {name: 'salad', price: 70, label: 'Салат'},
  {name: 'tuna', price: 90, label: 'Тунец'},
  {name: 'salmon', price: 50, label: 'Лосось'},
  {name: 'avocado', price: 45, label: 'Авокадо'},
  {name: 'sesame', price: 40, label: 'Кунжут'}
];

class App extends Component {
    state = {
    items: [
      {name: 'rice', count: 0, total: 0},
      {name: 'salad', count: 0, total: 0},
      {name: 'tuna', count: 0, total: 0},
      {name: 'salmon', count: 0, total: 0},
      {name: 'avocado', count: 0, total: 0},
      {name: 'sesame', count: 0, total: 0}
    ],
    totalPrice: 0 };

    addItem = (name) => {
        const newItems = this.state.items.map(theItem => {
            if (theItem.name === name){
                theItem.count += 1;
                theItem.total = theItem.count * availableItems.find(item => item.name === theItem.name).price;
            }
            return theItem;
        });
        this.setState({items: newItems});
    };

    render() {
        return (
            <div className="App">
                <ItemsForm items={availableItems} addItem={this.addItem}/>
                <Order items={this.state.items}/>
            </div>
        );
  }
}

export default App;
