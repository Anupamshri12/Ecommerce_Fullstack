import React from 'react'
import './Move1.css'
export default function Move() {
  return (
    <>
    <div className="container2" id = "humai">
        <h1>FEAUTRED PRODUCTS</h1>
        <div className="squares">
        <div className="square square1" >
              <div className="likho" id = "ky">
                <h4>Men's Activewear</h4>
                <p>Starting From</p>
                <div className="type"><h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>399</h2>
                <button className="ex"><p>EXPLORE MORE</p></button>
                </div>
              </div>
        </div>
        <div className="square square2" >
              <div className="likho">
                <h4>Women's KWears</h4>
                <p>Starting From</p>
                <div className="type"><h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>399</h2>
                <button className="ex" id = "nam"><p>EXPLORE MORE</p></button>
                </div>
              </div>
        </div>
        <div className="square square3">
              <div className="likho">
                <h4>Shoes& Footwear</h4>
                <p>Starting From</p>
                <div className="type"><h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>399</h2>
              <button className="ex"><p>EXPLORE MORE</p></button>
              </div>
              </div>
        </div>
        <div className="square square4" >
              <div className="likho">
                <h4>BagPacks & Tracks</h4>
                <p>Starting From</p>
                <div className="type"><h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>399</h2>
                <button className="ex"><p>EXPLORE MORE</p></button>
                </div>
              </div>
        </div>
        </div>
       
    </div>
    </>
  )
}
