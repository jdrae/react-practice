import React, {Component} from 'react';

const scaleNames = {
    g: 'Grams',
    o: 'Ounces'
};
  
function toGrams(ounces) {
    return ounces * 28.34952;
}
  
function toOunces(grams) {
    return grams / 28.34952;
}
  
function tryConvert(measurement, convert) {
    const input = parseFloat(measurement);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
  
  
class MeasurementInput extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onMeasurementChange(e.target.value);
    }
  
    render() {
      const measurement = this.props.measurement;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter measurement in {scaleNames[scale]}:</legend>
          <input value={measurement}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
}
  
export default class Calculator extends Component {
    constructor(props) {
      super(props);
      this.handleGramsChange = this.handleGramsChange.bind(this);
      this.handleOuncesChange = this.handleOuncesChange.bind(this);
      this.state = {measurement: '', scale: 'g'};
    }
  
    handleGramsChange(measurement) {
      this.setState({scale: 'g', measurement});
    }
  
    handleOuncesChange(measurement) {
      this.setState({scale: 'o', measurement});
    }
  
    render() {
      const scale = this.state.scale;
      const measurement = this.state.measurement;
      const grams = scale === 'o' ? tryConvert(measurement, toGrams) : measurement;
      const ounces = scale === 'g' ? tryConvert(measurement, toOunces) : measurement;
  
      return (
        <div>
          <MeasurementInput
            scale="g"
            measurement={grams}
            onMeasurementChange={this.handleGramsChange} />
          <MeasurementInput
            scale="o"
            measurement={ounces}
            onMeasurementChange={this.handleOuncesChange} />
        </div>
      );
    }
}
