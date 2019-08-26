import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import Button from './Button.js';
import './Button.css';

class Table extends Component {
   
   state = {
   		employees: []
	}

   componentDidMount() {
   	fetch('http://localhost:9999/employees')
		.then(response => {
			if (response.ok) {
				return response.json();
				} else {
					throw new Error('URL fetch error ...');
				}
		})
		.then(the => {
			this.setState({
				employees: the.data
				})
		console.log(this.state.employees)
		})
		.catch(error => { console.log(error.message) })
	}


   renderTableHeader() {
  	return (
				<tr><th>NAME</th>
				<th>EMAIL</th>
				<th>PHONE</th>
				<th>ADDRESS</th>
				<th>ACTIVE</th></tr>
      	)
   }

   renderTableData() {
      return this.state.employees.map((student, index) => {
         const { id, name, email, phone, address, active, created } = student //destructuring
         return (
            <tr key={id}>
               <td>{name}</td>
               <td>{email}</td>
               <td>{phone}</td>
               <td>{address}</td>
			   <td><input type="checkbox" name="name1" />&nbsp;</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='employees'>
               <tbody>
			   <div id="button"><Button /></div>
			   <tr><td></td></tr>
			   
			   {this.renderTableHeader()}
			   {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table 
