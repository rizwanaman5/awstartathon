import React from 'react'
import DetailForm from './detailForm'

class Main extends React.PureComponent {
    state = {
        count: new Array(Number(this.props.count)).fill(1)
    }
    render() {
        // console.log('state', this.state.count)
        return (
            <>
                {/* {console.log('props', this.props.count)} */}
                {this.state.count.map((e, index) => (
                    <div key={index} style={{ width: '100%' }} >
                        <DetailForm index={index} handleFormDetails={this.props.handleFormDetails} state={this.props.state} />
                    </div>
                ))}
            </>
        )
    }
}

export default Main