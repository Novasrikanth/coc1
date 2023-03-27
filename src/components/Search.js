import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className='container'>
        <form class="form-inline" action="/action_page.php">
    <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
    <button class="btn btn-success" type="submit">Search</button>
  </form>
      </div>
    )
  }
}

export default Search
