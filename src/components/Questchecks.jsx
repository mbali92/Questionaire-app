import React, { useState} from 'react'
import QuestImage from '../assets/checklist-img.png'

function Questchecks({dataShow,update}) {
  const [checkboxid, setcheckboxid] = useState('');
  const [responseValue, setresponseValue] = useState('');
  
  function updateCheckBox(id,checkValue){
   setcheckboxid(id)
   setresponseValue(checkValue)

   let updatedCheckValues = {};
   
   for (let i = 0; i < dataShow.length; i++) {
      if(dataShow[i].id == id){
         dataShow[i].agree = 0;
         dataShow[i].disagree = 0;
         dataShow[i].neutral = 0;

         if(checkValue  == 'agree'){dataShow[i].agree = 1}
         if(checkValue == 'disagree'){dataShow[i].disagree = 1}
         if(checkValue == 'neutral'){dataShow[i].neutral = 1}
         updatedCheckValues = dataShow[i]
      }
   }
   update(id,updatedCheckValues)
  }
  return (
    <>
      <div className="question-checkbox-header">
        <div className="box-wrapper">
            <img src={QuestImage} id='header_check-img' alt="" />
            <div className="header_check_title">
                <h6>Questions checkboxes</h6>
                <p>Please view list of checkboxes below</p>
            </div>
        </div>
      </div>
      <div className="check-box-section">
            <div className="box-wrapper">
                <div className='checkbox_section_title'>
                  <h3> Questionnaire</h3>
                  <p>Please check the box that is sutable for you </p>
                </div>
                {
                  dataShow.map((item)=>(
                     <div key={item.id} className="check_box_question">
                        <p>{item.quest}</p>
                        <form action="">
                           <div className='checkbox-wrapper'>
                              <div className='checkbox-input-wrapper'>
                                 <input type="checkbox" onChange={()=>updateCheckBox(item.id, 'agree')}/>
                                 <span className='radio-box'><span style={{display: item.id == checkboxid && responseValue == 'agree' ? 'block':'none'}}></span></span>
                                 <p>Agree</p> 
                              </div>
                              <div className='checkbox-input-wrapper'>
                                 <input type="checkbox"  onChange={()=>updateCheckBox(item.id, 'neutral')}/>
                                 <span className='radio-box'><span style={{display: item.id == checkboxid && responseValue == 'neutral' ? 'block':'none'}}></span></span>
                                 <p>Neutral</p>
                              </div>
                              <div className='checkbox-input-wrapper'>
                                 <input type="checkbox"  onChange={()=>updateCheckBox(item.id, 'disagree')}/>
                                 <span className='radio-box'><span style={{display: item.id == checkboxid && responseValue == 'disagree' ? 'block':'none'}}></span></span>
                                 <p>Disagree</p>
                              </div>
                           </div>
                        </form>
                     </div>
                  ))
                }
            </div>
       </div>
    </>
  )
}

export default Questchecks