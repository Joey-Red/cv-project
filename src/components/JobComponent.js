import React from 'react';
import styles from "./styles.css"
function JobComponent(props) {
  let onEdit = () =>{
    const showComponentWork = document.querySelector('.JobComponent');
    showComponentWork.style.display="none";
    const workInfo = document.querySelector('.workInfo');
    workInfo.style.display="grid";
  }
  
  return (
    <div className='JobComponent'>
      <h1 className='job-header'>Work Information</h1>
      <label>Company Name </label>
      <p>{props.companyName}</p>
      <label>Position Held</label>
      <p>{props.jobDuties}</p>
      <label>Job Duties</label>
      <p>{props.jobDuties}</p>
      <label>Start Date</label>
      <p>{props.workDateFrom}</p>
      <label>End Date</label>
      <p>{props.workDateTo}</p>
      <button id='editButtonWork'onClick={onEdit}>
        Edit
      </button>
    </div>
  )
}

export default JobComponent;