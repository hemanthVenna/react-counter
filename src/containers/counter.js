import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {

	render() {
		return (
			<p>{this.props.count}</p>
		)
	}
}

function mapStateToProps(state) {
	return {
		count: state.count
	}
}


export default connect(mapStateToProps)(Counter)