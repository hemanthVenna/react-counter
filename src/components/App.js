import React from 'react';
import '../App.css';
import Incrementor from '../containers/incrementor.js';
import Decrementor from '../containers/decrementor.js';
import Counter from '../containers/counter.js';

import Autocomplete from 'react-autocomplete'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputdata: "",
      cityname: ""
    }
  }
  render() {
    return (
      <div className="container">
        <input value={this.state.inputdata} 
        onChange={(e) => { const re = /^[0-9\b]+$/;
          if (e.target.value == '' || re.test(e.target.value)) {
            this.setState({ inputdata: e.target.value })
          }
          }} onBlur={() => alert(this.state.inputdata)} />

        <Autocomplete
          getItemValue={(item) => item.label}
          items={[
            { label: 'apple' },
            { label: 'banana' },
            { label: 'pear' }
          ]}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={this.state.cityname}
          onChange={(e) => this.setState({ cityname: e.target.value })}
          onSelect={(val) => this.setState({ cityname: val })}
        />
        <Counter></Counter><br />
        <div className="columns">
          <div className="column is-11">
            <Incrementor></Incrementor>
          </div>
          <div className="column auto">
            <Decrementor></Decrementor>
          </div>
        </div>
      </div>
    )
  }

}

