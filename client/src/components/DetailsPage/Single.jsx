import React from 'react'
import './details.css'
import img from '../assets/cardimg.png'
import Creator from './Creator'
import Transaction from './Transaction'
import Description from './Description'
const Single = () => {
  return (
    <div className="singleMainContainer">
        <div className="singleContainer">
            <div className="singleImageCard ">
                <img src={img} alt="img" />
            </div>
            <div className="campaignInfo">
                <div className="camInfo sha">
                    <div className="camHead">6</div>
                    <div className="camFoot">Days Left</div>
                </div>
                <div className="camInfo sha">
                    <div className="camHead">0.01</div>
                    <div className="camFoot">Raised</div>
                </div>
                <div className="camInfo sha">
                    <div className="camHead">1</div>
                    <div className="camFoot">Total Backers</div>
                </div>
            </div>
        </div>
        <div className="creatorNtransaction">
            <div className="creatorContains">
            <h1 style={{textAlign:"start",marginLeft:"6rem",color:"white"}} >Creator</h1>
            <Creator/>
            <div className="description">
            <h1 style={{textAlign:"start",marginLeft:"6rem",color:"white"}} >Description</h1>
            <Description/>
            </div>
            </div>
            <div className="transactionContains">
            <h1 style={{textAlign:"start",marginBottom:"1rem",color:"white"}} >FUND</h1>
            <Transaction/>
            </div>
        </div>
    </div>
  )
}

export default Single