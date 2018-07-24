import React, { Component, PropTypes } from 'react'

export default class City extends Component {
  render() {
   const temperature = (this.props.city.list[0].main.temp - 273.15).toFixed(2);
   const styles = {
     display: 'flex',
     margin: '0.9rem 0 0.9rem -2.3rem',
   };
   
   const textStyles = {
    display: 'inline-block',
    padding: '1.2rem 0.2rem 1.2rem 1.2rem',
    backgroundColor: 'rgba(80, 0, 120, 0.6)',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.18)',
    fontSize: '2rem',
    color: '#FFF'
  };

   const buttonStyles = {
    height: '75.4px',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderColor: 'rgba(0, 0, 0, 0.1)'
   }

   return (
      <li style = {styles}>
        <div style = {textStyles}>
          {this.props.city.city.name} {temperature} {this.props.city.list[0].weather[0].description}
        </div>
        <button style = {buttonStyles} onClick = {e => this.handleDelete()}>
          DELETE
        </button>
      </li>
    )
  }
  handleDelete(e) {
    this.props.onDeleteClick(this.props.id);
  }
}