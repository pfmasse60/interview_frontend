import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }

   render() {
      return (
         <div>
            <button class="button" onClick = {this.updateState}>CLICK</button>
         </div>
      );
   }
}
export default Button
