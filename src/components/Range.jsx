import React, { Component } from "react";
import { connect } from "react-redux";
/*___ styles ___*/
import "./styles/Range.css";
/*___ styles ___*/
import { generateValues } from "../actions/valuesActions";

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.generateValues();
  }

  handleChange = (e) => {
    this.props.generateValues(e.target.value);
  };

  disabledInput = () => {
    if (this.props.working) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="range">
          <input
            type="range"
            className="range-input"
            min="2"
            max="60"
            value={this.props.amount_of_values || 14}
            onChange={this.handleChange}
            disabled={this.disabledInput()}
          />
        </div>
      </React.Fragment>
    );
  }
}
/*___ mapStateToProps ___*/
const mapStateToProps = ({ dataReducer }) => dataReducer;
/*___ mapDispatchToProps ___*/
const mapDispatchToProps = {
  generateValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Range);
