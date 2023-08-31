import dataImage from '../assets/data-img2.png'

function Dashboard({dataShow}) {

  function assignTotalCheckValues(){
    let totalRadioBtnValues = {agree: 0, neutral:0, disagree:0}

    for (let i = 0; i < dataShow.length; i++) {
        if(dataShow[i].neutral == 1){
            totalRadioBtnValues.agree++; 
        }
        if(dataShow[i].agree == 1){
            totalRadioBtnValues.neutral++
        }
        if(dataShow[i].disagree == 1){
            totalRadioBtnValues.disagree++
        }
    }
    return totalRadioBtnValues;
  }
 
  return (
    <>
    <div className='dashboard-section'>
        <div className="dashboard-header">
            <div className="box-wrapper">
                <img src={dataImage} alt="" />
                <div className="dashboard-hero-title">
                    <h3>Dashboard summary</h3>
                    <p>Please view the summary of all the questions posted and replayed</p>
                    <button><i className="lni lni-home"></i> View home</button>
                </div>
            </div>
        </div>
        <div className="dashboard-content">
        <div className="box-wrapper">
                <div className="dashboard_content_text">
                    <h5>Our Questionaire analytics</h5>
                    <p>Statistics of the answered question</p>
                </div>
                <div className="dashboard_content-stats">
                    <div className="dashboard_number_box">
                        <i className="lni lni-question-circle"></i>
                        <h6>{dataShow.length}</h6>
                        <p>Number of questions</p>
                    </div>
                    <div className="dashboard_number_box">
                        <i className="lni lni-handshake"></i>
                        <h6>{assignTotalCheckValues().agree}</h6>
                        <p>Agreements</p>
                    </div>
                    <div className="dashboard_number_box">
                    <i className="lni lni-minus"></i>
                        <h6>{assignTotalCheckValues().neutral}</h6>
                        <p>Nuetral</p>
                    </div>
                    <div className="dashboard_number_box">
                        <i className="lni lni-thumbs-down"></i>
                        <h6>{assignTotalCheckValues().disagree}</h6>
                        <p>Disagree</p>
                    </div>
                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard