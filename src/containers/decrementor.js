import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { subtract,add } from '../actions/index.js'

class Decrementor extends Component {

	render() {
		return (
			<div>
			<button
				onClick={(e) => { e.preventDefault(); { this.props.dispatch(subtract()) } }}
			>Subtract 1 from counter </button>
			<button
				onClick={(e) => { e.preventDefault(); { this.props.dispatch(add()) } }}
			>Add 1 to the </button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators({subtract,add}, dispatch)
	}
}
export default connect(mapDispatchToProps)(Decrementor)