import React from 'react'

class DetailForm extends React.PureComponent {
    state = {
        toggle: false,
        roomName: '',
        description: ''
    }
    changeToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container" >
                <div className="row toggleDiv" onClick={this.changeToggle} >
                    <label>{this.props.state[`roomName-${this.props.index}`] || `Room ${this.props.index + 1}`}</label>
                </div>
                {this.state.toggle ? (
                    <div className="row form" >
                        <div className="col pic">
                        </div>
                        <div className="col">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Room name</label>
                                    <input type="text"
                                        className="form-control"
                                        value={this.props.state[`roomName-${this.props.index}`]}
                                        onChange={(e) => this.props.handleFormDetails(e)}
                                        name={`roomName-${this.props.index}`}
                                        placeholder="Every room has a type | eg. lobby, dinning" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Room description</label>
                                    <textarea
                                        className="form-control"
                                        value={this.props.state[`description-${this.props.index}`]}
                                        onChange={(e) => this.props.handleFormDetails(e)}
                                        name={`description-${this.props.index}`}
                                        placeholder="Give your room a few words...."
                                        rows="3">
                                    </textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : null}
            </div >
        )
    }
}

export default DetailForm