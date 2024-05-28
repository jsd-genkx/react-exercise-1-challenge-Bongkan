// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    render() {
        const { greetName = "JSD7" } = this.props;
        return (
            <div className="pb-20 text-center">
                <h1>Hello, {greetName}!</h1>
                <p>
                    This React component is made by a class, we call it a class component
                </p>
            </div>
        );
    }
}

ClassComponent.propTypes = {
    greetName: PropTypes.string,
};

export default ClassComponent;