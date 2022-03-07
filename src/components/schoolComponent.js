import React from 'react';
import styles from "./styles.css"
function SchoolComponent(props) {
  let onEdit = () =>{
    const showComponentEdu = document.querySelector('.SchoolComponent');
    showComponentEdu.style.display="none";
    const educationInfo = document.querySelector('.educationInfo');
    educationInfo.style.display="grid";
  }
  return (
    <div className='SchoolComponent'>
      <h1 className='school-header'>School Information</h1>
      <label>Title of Institution</label>
      <p>{props.schoolName}</p>
      <label>Title of Study</label>
      <p>{props.titleOfStudy}</p>
      <label>Date of Study</label>
      <p>{props.dateOfStudy}</p>
      <button id='editButtonEdu'onClick={onEdit}>
        Edit
      </button>
    </div>
  )
}

export default SchoolComponent;