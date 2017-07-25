import React from 'react';
import ListItem from './ListItem';
import '../App.css';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers : [1, 2, 3, 4, 5]
    };
  }

  render() {
    const nums = this.state.numbers;
    const items = nums.map((num) =>
            <ListItem key={num} val={num}/>);
    return (
      <ul className="List">
          {items}
      </ul>
    );
  }
}

export default List;
