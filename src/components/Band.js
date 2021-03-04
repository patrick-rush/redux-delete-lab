import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <span>{this.props.band.name}</span><button onClick={() => this.props.delete(this.props.band.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
// import React from 'react'

// const Band = props => {
//     return (
//       <div>
//         <span>{props.band.name}</span><button onClick={props.delete(props.band.id)}>Delete</button>
//       </div>

//     )
// }

// export default Band