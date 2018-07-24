import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCity, deleteCity } from './actions/actions'

import AddCity from './components/AddCity.js'
import CityList from './components/CityList.js'

class App extends Component {
  render() {
    const { dispatch, cities } = this.props;
    const styles = {
      paddingTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      background: 'url(https://raw.githubusercontent.com/Kapysta0605/Stuff/master/UI/content/Background1.png)',
      height: '100vh',
      gridRows: 'auto',
    };

    return (
      <div style = {styles}>
        <AddCity onAddClick = {city => dispatch(addCity(city))} />
        <CityList onDeleteClick = {city => dispatch(deleteCity(city))} cities = {cities}/>
      </div>
    )
  }
}
function select(state) {
  return {
    cities: state.cities,
  }
}
export default connect(select)(App);