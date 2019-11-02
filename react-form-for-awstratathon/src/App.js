import React from 'react';
import axios from 'axios'
import './App.css';
import Main from './roomUploading/main'


class App extends React.PureComponent {
  state = {
    count: '',
    next: false,
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      count: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      next: true
    })
  }
  handleFormDetails = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmitFormDetails = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('/dashboard', this.state)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    // console.log(Object.getOwnPropertyNames(this.state).length)
    return (
      <div>
        <form onSubmit={this.handleSubmitFormDetails} className="App-header">
          {!this.state.next ? (
            <>
              <label>How many rooms do you have?</label>
              <form onSubmit={(e) => this.handleSubmit(e)} style={{ display: 'flex', margin: '20px' }} >
                <input type="number" className="form-control" onChange={e => this.handleChange(e)} name='count' style={{ margin: '5px' }} placeholder="eg. 1, 2, 3..." />
                {this.state.count > 0
                  ? <button type="submit" className="btn btn-primary" style={{ margin: '5px' }} >Next</button>
                  : <button type="submit" className="btn btn-primary" style={{ margin: '5px' }} disabled>Next</button>
                }
              </form>
            </>
          ) : <label style={{ margin: '50px' }} >Please fill in the details of your rooms</label>}

          {this.state.next ? <Main count={this.state.count} handleFormDetails={this.handleFormDetails} state={this.state} /> : null}

          {this.state.next
            ? <button type="submit" className="btn btn-primary" style={{ margin: '5px' }} >Submit form</button>
            : null}
        </form>
      </div>
    );
  }
}

export default App;
