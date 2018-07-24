import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import '../styles/AddCity.css'

export default class AddCity extends Component {
  render() {
    const styles = {
      display: 'flex'
    };

    const inputStyles = {
      borderColor: 'rgba(140, 140, 140, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderTopLeftRadius: '30px',
      borderBottomLeftRadius: '30px',
      paddingLeft: '8px',
      fontSize: '3rem',
      color: 'white'
    };

    const buttonStyles = {
      height: '61px',
      borderTopRightRadius: '30px',
      borderBottomRightRadius: '30px',
      fontSize: '3rem',
      textTransform: 'uppercase',
      color: '#7D26CD',
      backgroundColor: 'rgba(110, 20, 150, 0.2)',
      borderColor: 'rgba(110, 20, 140, 0.1)'
    }

    return (
        <div style = {styles}>
          <input style = {inputStyles} type = 'text' ref = 'input' />				
          <button style = {buttonStyles} onClick = {(e) => this.handleClick(e)}>
              Add
          </button>
        </div>
    )
   }
   handleClick(e) {
     const node = this.refs.input;
     const city = node.value.trim();
     axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=da4e6d4c52b615144978681741a16908`)
       .then(response => this.props.onAddClick(response.data))
       .catch(error => alert(`"${city}" doesn't exist`));
     node.value = '';
   }
}