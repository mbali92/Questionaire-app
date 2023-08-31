import { useRef, useState } from 'react'
import userImage from '../assets/user-img3.png'


function Questionlist({sendQuest, dataShow, update,deleteObg}) {
  const userInput = useRef()
  const [editId, seteditId] = useState();
  
  function submitQuestion(event){
    event.preventDefault()
    if(userInput.current.value){
      if(editId){
        let sectionToEdit = {}
        for (let i = 0; i < dataShow.length; i++) {
          if(dataShow[i].id == editId){
            dataShow[i].quest = userInput.current.value;
            sectionToEdit =  dataShow[i];
          }
        }
        update(editId, sectionToEdit)
        window.location.href = 'http://localhost:5173/'
      }else {
        const questionObject  = {quest:userInput.current.value, agree:0, disagree:0,neutral:0}
        sendQuest(questionObject)
      }
      userInput.current.value ='';
    }
  }
  function questToEdit(id, quest){
    userInput.current.value = quest;
    seteditId(id)
  }

  return (
    <>
    <div className='question-section'>
      <div className="question_title">
        <img src={userImage} alt="" />
        <div className='question-title-text'>
          <h6>Welcome, create a questionaire</h6>
          <span>Please write any question you want</span>
        </div>
      </div>
      <div className='form-wrapper'>
         <form action="" className='box-wrapper'>
            <input ref={userInput} type="text" placeholder='Please write question...' required />
            <button type='submit' id='send-question' onClick={e=>submitQuestion(e)}>send question</button>
          </form>
      </div>
      <div className="question_list">
        <div className="box-wrapper">
          <h3>List of questions:</h3>
            { 
              dataShow.map((item) =>(
                <div key = {item.id} className="question_text">
                  <div>
                    <p>{item.quest}</p>
                  </div>
                  <div className='questionlist_icons'>
                    <i className="lni lni-pencil-alt"onClick={()=>questToEdit(item.id,item.quest)}></i>
                    <i className="lni lni-trash-can" onClick={()=>deleteObg(item.id)}></i>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default Questionlist