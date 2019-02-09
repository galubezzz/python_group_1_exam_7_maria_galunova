import React, { Component } from 'react';
import './App.css';
import Order from './components/Order/Order';
import ItemsForm from './components/ItemsForm/ItemsForm';

const availableItems = [
  {name: 'rice', price: 3, label: 'Рис'},
  {name: 'salad', price: 2, label: 'Салат'},
  {name: 'tuna', price: 5, label: 'Тунец'},
  {name: 'salmon', price: 5, label: 'Лосось'},
  {name: 'avocado', price: 2, label: 'Авокадо'},
  {name: 'sesame', price: 1, label: 'Кунжут'}
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
    totalPrice: null };

    addItem = (name) => {
        const newItems = this.state.items.map(theItem => {
            if (theItem.name === name){
                theItem.count += 1;
                theItem.total = theItem.count * availableItems.find(item => item.name === theItem.name).price;
            }
            return theItem;
        });
        this.setState({items: newItems});
        this.countTotal();
    };

    removeItem = (name) => {
        const newItems = this.state.items.map(theItem => {
            if (theItem.name === name){
                theItem.count -= 1;
                theItem.total = theItem.count * availableItems.find(item => item.name === theItem.name).price;
            }
            return theItem;
        });
        this.setState({items: newItems});
        this.countTotal();
    };

    countTotal = () => {
        let items = [...this.state.items];
        let price = items.reduce(function (sum, ing) {
            return sum + ing.total;}, 0);
        this.setState({totalPrice: price});
      };

    getLabel = (name) => {
        let label = availableItems.find(item => item.name === name).label;
        return label;
    };



    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className='row'>
                        <ItemsForm items={availableItems} addItem={this.addItem}/>
                        <Order items={this.state.items}
                               label={this.getLabel}
                               removeItem={this.removeItem}
                               total={this.state.totalPrice}/>
                    </div>
                </div>

            </div>
        );
  }
}

export default App;
