import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const num = this.props.val;

    return (
      <li className="ListItem">
        List Item number : {num}
      </li>
    );
  }
}

export default ListItem;
