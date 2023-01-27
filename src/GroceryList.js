import {Component} from 'react';
import check from './check.jpg';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []

    }

    onChangeEvent(apple) {
        this.setState({userInput: apple});

        
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item!")
        }
        else {
        let listArray = this.state.groceryList;
        
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
    }}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})

    }

    onFormSubmit(e) {
        e.preventDefault();
    }
/////
    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="Container">
                <input type='text' 
                placeholder='What do you want to buy?'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="Container">
            <button onClick={() => this.addItem(this.state.userInput)} className="Add">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={check} width="30px" alt="cart"/>{item}</li>
                ))}
            </ul>
            <div className="Container">
            <button onClick={() => this.deleteItem()} className="Delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}