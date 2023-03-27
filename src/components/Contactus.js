import React, { Component } from 'react'

export class Contactus extends Component {
  render() {
    return (
        <div className='conatainer'>
        <div className='card'>
            <div className='card-header'>
                <h1>Contact Person</h1>
                        <img src="data:image/jpeg;base64,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" alt="photo" className='app-photo'/>
<br/>
<p className="person-name">Bro. Vinod Rao</p>
<p style={{marginTop:-20}} className="person-dig">Evangilist</p>
<p className='person-contact'>Phone:9248712107</p>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Contactus