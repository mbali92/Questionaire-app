import { useState } from 'react'
import '../stylesheet.css'


function Sidebar({showButton}) {
  const [ shownSection, setshownSection] = useState('create');
  
  function changeActiveLink(sectionToShow){
    setshownSection(sectionToShow)
    showButton(sectionToShow)
  }
  return (
    <>
      <div className="sidebar">
        <p id='logo'>Q.</p>
        <div className="side-nav">
          <p  className= { shownSection == 'create' ? 'active-link':''} onClick={()=>{changeActiveLink('create')}}><i className="lni lni-question-circle"></i>Create</p>
          <p className= { shownSection == 'dashboard' ? 'active-link':''}    onClick={()=>{changeActiveLink('dashboard')}}><i className="lni lni-graph"></i>dashboard</p>
          <p className= { shownSection == 'Questionnaire' ? 'active-link':''}  onClick={()=>{changeActiveLink('Questionnaire')}}><i className="lni lni-write"></i>Questionnaire</p>
        </div>
        <div className='side-social-icons'>
           <i className="lni lni-linkedin"></i>
           <i className="lni lni-instagram"></i>
           <i className="lni lni-twitter"></i>
        </div>
      </div>
    </>
  )
}

export default Sidebar