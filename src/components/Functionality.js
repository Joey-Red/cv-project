import React, { Component } from 'react';
import uniqid from "uniqid";
import styles from "./styles.css"
import MyComponent from './Caller';
import SchoolComponent from './schoolComponent';
import JobComponent from './JobComponent';

class Functionality extends Component {
  constructor(){
    super();
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        id: uniqid(),
      },
      updatedInfo: [],
      eduInfo: [],
      workInfo: [],
      workInfo2: []
    }
  }
  onSubmitGeneral = (e) => {
    const { firstName, lastName, email, phoneNumber} = this.state
    e.preventDefault();
    this.setState({
      updatedInfo: [
      firstName,
      lastName,
      email,
      phoneNumber
      ]
    })
    const showComponent = document.querySelector('.MyComponent');
    showComponent.style.display="grid";
    const generalInfo = document.querySelector('.generalInfo');
    generalInfo.style.display="none";
  }
  onSubmitEdu = (e) => {
    const { schoolName, titleOfStudy, dateOfStudy} = this.state
    e.preventDefault();
    this.setState({
      eduInfo: [
      schoolName,
      titleOfStudy,
      dateOfStudy
      ]
    })
    const showComponentEdu = document.querySelector('.SchoolComponent');
    showComponentEdu.style.display="grid";
    const educationInfo = document.querySelector('.educationInfo');
    educationInfo.style.display="none";
  }
  onSubmitWork = (e) => {
    const { companyName, companyPosition, jobDuties, workDateFrom, workDateTo } = this.state
    e.preventDefault();
    this.setState({
      workInfo: [
      companyName,
      companyPosition,
      jobDuties,
      workDateFrom,
      workDateTo
      ]
    })
    const showComponentWork = document.querySelector('.JobComponent');
    showComponentWork.style.display="grid";
    const workInfo = document.querySelector('.workInfo');
    workInfo.style.display="none";
  }
  onSubmitWork2 = (e) => {
    const { companyName2, companyPosition2, jobDuties2, workDateFrom2, workDateTo2 } = this.state
    e.preventDefault();
    this.setState({
      workInfo2: [
      companyName2,
      companyPosition2,
      jobDuties2,
      workDateFrom2,
      workDateTo2
      ]
    })
    const showComponentWork2 = document.querySelector('.JobComponent2');
    showComponentWork2.style.display="grid2";
    const workInfo2 = document.querySelector('.workInfo2');
    workInfo2.style.display="none2";
  }
  
  handleChange = (e, field) => {
    this.setState({
    [field]: e.target.value,
    });
  }

  render() {
    
  return (
    <div className='container'>
      <form onSubmit={this.onSubmitGeneral} className='generalInfo'>
        <h1 className='general-header'>General Information</h1>
        <label htmlFor='firstName'>Enter First Name </label>
        <input placeholder="John" onChange={(event)=>this.handleChange(event, "firstName")}
        type="text" minLength={"2"}maxLength={"15"}
        id="firstName"/>
        <label htmlFor='lastName'>Enter Last Name </label>
        <input placeholder="Doe" onChange={(event)=>this.handleChange(event, "lastName")}
        type="text" minLength={"2"}maxLength={"15"} required 

        id="lastName"/>

        <label htmlFor='email'>Enter Email </label>
        <input placeholder="johndoe@gmail.com" onChange={(event)=>this.handleChange(event, "email")}
        type="email" required
        id="email"/>

        <label htmlFor='phoneNumber'>Enter Phone Number </label>
        <input placeholder="1234567890"  onChange={(event)=>this.handleChange(event, "phoneNumber")}
        type="text"minLength={"10"}maxLength={"10"}  required

        id="phoneNumber"/>

        <button type='submit' id='generalButton'>
          Enter
        </button>
      </form>
      <div>
          <MyComponent firstName={this.state.updatedInfo[0]} lastName={this.state.updatedInfo[1]} email={this.state.updatedInfo[2]} phoneNumber={this.state.updatedInfo[3]}/>
      </div>
      {/* Educational Section */}
      <form onSubmit={this.onSubmitEdu}  className='educationInfo'>
        <h1 className='school-header'>School Information</h1>
        <label htmlFor='schoolName'>Enter School Name </label>
        <input placeholder="Texas Technical Institute"  onChange={(event)=>this.handleChange(event, "schoolName")}
        type="text" minLength={"4"} required
        id="schoolName"/>

        <label htmlFor='titleOfStudy'>Title Of Study </label>
        <input placeholder="Engineering"  onChange={(event)=>this.handleChange(event, "titleOfStudy")}
        type="text" minLength={"4"} required
        id="titleOfStudy"/>

        <label htmlFor='dateOfStudy'>Date Of Study </label>
        <input  onChange={(event)=>this.handleChange(event, "dateOfStudy")}
        type="date" minLength={"4"} required
        id="dateOfStudy"/>

        <button type='submit' id='schoolButton'>
          Enter
        </button>
      </form>
      <div>
          <SchoolComponent schoolName={this.state.eduInfo[0]} titleOfStudy={this.state.eduInfo[1]} dateOfStudy={this.state.eduInfo[2]} />
      </div>
      <form onSubmit={this.onSubmitWork} className='workInfo'>
        <h1 className='work-header'>Work Information</h1>
        <label htmlFor='companyName'>Company Name</label>
        <input onChange={(event)=>this.handleChange(event, "companyName")}
        type="text" minLength={"4"} required
        id="companyName" placeholder='Dunder Mifflin'/>
        <label htmlFor='companyPosition'>Position held</label>
        <input onChange={(event)=>this.handleChange(event, "companyPosition")}
        type="text" minLength={"4"} required
        id="companyPosition" placeholder='Assistant to the Regional Manager'/>
        <label htmlFor='jobDuties'>Job Duties</label>
        <input onChange={(event)=>this.handleChange(event, "jobDuties")}
        type="text" placeholder='Cold calls, maintain business relationships'
        id="jobDuties" minLength={"4"} required/>
        <label htmlFor='workDateFrom'>Start Date</label>
        <input onChange={(event)=>this.handleChange(event, "workDateFrom")}
        type="date" required
        id="workDateFrom"/>
        <label htmlFor='workDateTo'>End Date</label>
        <input onChange={(event)=>this.handleChange(event, "workDateTo")}
        type="date" required
        id="workDateTo"/>
        <button type='submit' id='workButton'>
          Enter
        </button>
      </form>
      <div>
        <JobComponent companyName={this.state.workInfo[0]} companyPosition={this.state.workInfo[1]} jobDuties={this.state.workInfo[2]} workDateFrom={this.state.workInfo[3]} workDateTo={this.state.workInfo[4]}/>
      </div>
    </div>
    );
  }
}
export default Functionality;