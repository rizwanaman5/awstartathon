import React from 'react';

class Dropdown extends React.Component {
    state = {}
    render() {
        console.log(this.props.state.count)
        console.log(this.props.index);
        return (
            <div>
                 console.log(this.props.state)
            <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose link 1
  </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {this.state.count.map((e, index)=>(
                            <li class="dropdown-item">{this.props.state[`roomName-0`]}</li>
                            // <h1>Hello</h1>
                        ))}

                    </div>
                </div><div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose link 1
  </a>

                    {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {this.state.count.map((e, index)=>(
                            // <li class="dropdown-item">{this.props.state[`roomName-${index}`]}</li>
                            <h2>Hello</h2>
                        ))}
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Dropdown;