import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from '../actions/index.js'

class Incrementor extends Component {

	render() {
		return (
			<button
				onClick={(e) => { e.preventDefault(); { this.props.dispatch(add()) } }}
			>Add 1 to the </button>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(add, dispatch)
	}
}
export default connect(mapDispatchToProps)(Incrementor)