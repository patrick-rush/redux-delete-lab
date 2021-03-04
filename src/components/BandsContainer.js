import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band) => <Band key={band.id} band={band} delete={this.props.delete} /> );
  
  render() {

    return (
      <div>
        <BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({ type: "DELETE_BAND", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
