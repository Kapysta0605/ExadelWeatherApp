import React, { Component, PropTypes } from 'react'
import City from './City.js'

export default class CityList extends Component {
    render() {
      const styles = {
        listStyleType: 'none'
      };

      return (
         <ul style = {styles}>
          {Array.from(this.props.cities, ([id, city]) => city).map(city =>
               <City
                onDeleteClick = {this.props.onDeleteClick}
                key = {city.id}
                {...city}
               />
            )}
         </ul>
      )
   }
}