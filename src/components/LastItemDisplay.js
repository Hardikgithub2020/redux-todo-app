import React, { Component } from 'react';
import '../syles/LastItemDisplay.css';

// -------------------------------------------------------------------
// Since this component doesn't have access to ToDoList.js's state...
// This component doesn't know what the last item added was
// Redux can help fix this
// -------------------------------------------------------------------

export default class LastItemDisplay extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id="last-item-display">
        <h4> last item display : {this.props.value}</h4>
        
      </div>
    )
  }
}
