import React, { Component } from 'react';
import TextField from '../TextField';

class MegaTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            correct: false
        }
    }

    validate(e) {
        const value = e.target.value;
        const { regex, onValidate, name, customErrorMessage } = this.props;

        if (regex && value !== '') {

            if (!(regex.test(value))) {
                e.target.error = true;
                return this.setState({ error: customErrorMessage || `Invalid ${name}`, correct: false });
            }

            e.target.error = false;
            return this.setState({ correct: true, error: false })
        }

        if (onValidate && value !== '') {
            const error = onValidate(value);

            if (error) {
                e.target.error = true;
                return this.setState({ error: error || `Invalid ${name}`, correct: false })
            }

            e.target.error = false;
            return this.setState({ correct: true, error: false })
        }

        if(value === '') return this.setState({correct: false, error: false});
    }

    render() {
        const { error, correct } = this.state;
        const { onValidate, ...other } = this.props;

        return (
            <TextField {...other} correct={correct} error={error && { message: error }} onBlur={this.validate.bind(this)} />
        )
    }
}

export default MegaTextField;
