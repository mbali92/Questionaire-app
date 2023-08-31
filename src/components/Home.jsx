import Sidebar from './Sidebar'
import Context from './Context';
import { useState } from 'react'


function Home() {
  const [ComponentToDisplay, setComponentToDisplay] = useState('create');
 
  function showComponent(componentBox){
    setComponentToDisplay(componentBox)  
  }
  
  return (
    <>
      <div className='wrapper-row'>
        <div className='side-bar-section'>
          <Sidebar showButton={showComponent}/>
        </div>
        <div className='main-content'>
          <Context componentName={ComponentToDisplay}/>
        </div>
      </div>
    </>
  )
}

export default Home