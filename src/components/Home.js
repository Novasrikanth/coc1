import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className='conatainer'>
        <h1><marquee>Welcome to Church of Christ Hyderabad</marquee></h1>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_m0hA6F8Oxz43Ibv4LAafyLh57JYsa-hgsg&usqp=CAU" className="App-logo" alt="logo" style={{marginLeft:50}} />
        <p style={{ color: "red" }}>
          welcome to church of christ Hyderabad
        </p>
        <a
          className="App-link"
          href="http://www.churchofchristhyd.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Church of christ official web page
        </a><br/>
        <a href="https://www.youtube.com/@churchofchristhyd/channels" >Youtube</a><br/>
        <a href="https://www.facebook.com/groups/churchofchristhyd" >Facebook</a><br/>
        <a href="mailto : kurrushdrk12gmail.com" target="_blank">Mail to</a>

      

        
      </div >
    )
  }
}

export default Home
