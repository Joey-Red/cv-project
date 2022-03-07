import React from 'react';
import styles from "./styles.css"
function MyComponent(props) {
  let onEdit = () =>{
    const showComponent = document.querySelector('.MyComponent');
    showComponent.style.display="none";
    const generalInfo = document.querySelector('.generalInfo');
    generalInfo.style.display="grid";
  }
  return (
    <div className='MyComponent'>
      <h1 className='general-header'>General Information</h1>
      <label>First Name </label>
      <p>{props.firstName}</p>
      <label>Last Name </label>
      <p>{props.lastName}</p>
      <label>Phone Number </label>
      <p>{props.phoneNumber}</p>
      <label>Email </label>
      <p>{props.email}</p>
      <button id='editButton' onClick={onEdit}>
        Edit
      </button>
    </div>
  )
}

export default MyComponent;