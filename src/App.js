import React from 'react';
import data from './data.json';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { data };
  }

  handleCellClick =(id) => {
    // Your logic for handling the cell click and redirection to details page
  }

  render() {
    return (
      <div id="products">
          {this.state.data.map(item => (
            <div id="each-product" key={item.id} onClick={()=> this.handleCellClick(item.id)}>
                <img src={item.image} alt={item.description} />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default App;