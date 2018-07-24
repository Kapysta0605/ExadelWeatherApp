export const ADD_CITY = 'ADD_CITY'
export const DELETE_CITY = 'DELETE_CITY'

let nextId = 0;

export function addCity(city) {
   return {
      type: ADD_CITY,
      id: nextId++,
      city
   };
}

export function deleteCity(id) {
  console.log(id)
   return {
    type: DELETE_CITY,
    id: id
 };
}