import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Routes from './Routes';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('/api/looneyTunes/getAllTunes').then((response) => {
      this.setState({ data: response.data })
      console.log(this.state.data)
    }).catch(err => console.log(err))


  }

  render() {
    let showLooneyTunes = this.state.data.map( (element) => {
      return <p key={element.characterid}>{`Name: ${element.name} Species:${element.species} Known to Say:${element.saying}`}</p>
    });

    return (
      <div className="App">
        <nav>
              <Link to='/'>Home Page</Link>
              <Link to='/add'>Add a Tune</Link>
              <Link to='/update'>Update a Tune</Link>
              <Link to='/delete'>Delete a Tune</Link>
          <h1>Looney Tunes Database</h1>
        </nav>

        <div className='ComponentSwitchUPBox'>
          {Routes}
        </div>

        <footer>
          <div className='leftBox'>
            {showLooneyTunes}
          </div>
          <div className='rightBox'>
            <img className='screenImage' src='https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/looney-tunes-56dbb69625120.jpg?itok=TH5ZkBm9' alt='' />
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
