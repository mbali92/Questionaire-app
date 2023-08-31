import React, { useState, useEffect } from "react"
import Questionlist from './Questionlist'
import Questchecks from './Questchecks'
import Dashboard from './Dashboard'

function Context({componentName}) {
   const [retrievedData, setretrievedData] = useState([]);   
    useEffect(() => {
        const fetchData = async()=>{
          try{
            const response = await fetch('http://localhost:5000/posts')
            if(response.ok){
              console.log('data collected sucessfully')
              const data = await response.json()
              setretrievedData(data)
            }else{
              console.log('error with fetching data')
            }
          }catch(error){
            console.log(error);
          }
        }
        fetchData()
        return () => {
          console.log('component unmounted')
        }
    }, []);

    const sendData = async(questRecieved)=>{
      try{
          const response = await fetch('http://localhost:5000/posts',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(questRecieved)
          })
          if(response.ok){
            console.log('form data sent')
          }else{
            console.log('data could not be send')
          }
        }catch(error){
          console.log(error)
      }
      location.reload()
    }
    const updateContent = async(objectId,objToSend)=>{
       fetch(`${'http://localhost:5000/posts'}/${objectId}`,{
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objToSend),
        })
        .then(response =>{
          if(!response.ok){
            throw new Error(`status ${response.status}`)
          }
        })
        .then(()=>{console.log('data upated succussfully')})
        .catch(error =>{
          console.error('Error updating data', error)
        })
    }
    const deleteInfo = async(objectId) =>{
      const serverURL = 'http://localhost:5000/posts'; 
      fetch(`${serverURL}/${objectId}`,{
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response =>{
        if(!response.ok){
          throw new Error(`status ${response.status}`)
        }
      })
      .then(()=>{console.log('data deleted succussfully')})
      .catch(error =>{
        console.error('Error deleting data', error)
      })
      location.reload()
    }

    return (
        <>
          {componentName == 'create' ? <Questionlist deleteObg ={deleteInfo} sendQuest= {sendData} dataShow={retrievedData} update={updateContent}  /> :''}
          {componentName == 'dashboard' ? <Dashboard dataShow={retrievedData} />:''}
          {componentName == 'Questionnaire' ? <Questchecks dataShow={retrievedData} update={updateContent}/> :''}   
        </>
    )
}

export default Context