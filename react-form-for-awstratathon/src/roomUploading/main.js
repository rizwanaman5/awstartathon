import React from 'react'
import DetailForm from './detailForm'
import Dropdown from './dropdowns'

class Main extends React.PureComponent {
    state = {
        count: new Array(Number(this.props.count)).fill(1)
    }
    render() {
        // console.log('state', this.state.count)
        var lastIndex = this.props.state.count - 1
        // console.log(this.props.state[`roomName-${lastIndex}`])
        return (
            <>
                {/* {console.log('props', this.props.count)} */}
                {this.state.count.map((e, index) => (
                    <div key={index} style={{ width: '100%' }} >
                        <DetailForm index={index} handleFormDetails={this.props.handleFormDetails} state={this.props.state} />
                    </div>
                ))}
                {lastIndex !== 0 && this.props.state[`roomName-${lastIndex}`]
                ?   <div className="container" style={{marginTop: "25px", width: "80%", margin: "auto", textAlign: "center"}}>
                        <p>Link your rooms</p>
                        {/* {this.state.count.map((e, index)=>(
                            // <h1>Hi</h1>
                            <p class="split-para">{lastIndex !== 0 && this.props.state[`roomName-${index}`]} <span><Dropdown state={this.props.state} index={index} /></span></p>
                         ))} */}
                    </div>
                : null}
            </>
        )
    }
}

export default Main