// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import Proptypes from "prop-types";

const FunctionalComponent = ({ greetName = "World" }) => {
    return (
        <div className="pb-20 text-center">
            <h1>Hello, {greetName}!</h1>
            <p>
                This React component is made by a function expression, we call it a functional component
            </p>
        </div>
    );
};

FunctionalComponent.propTypes = {
    greetName: Proptypes.string,
};


export default FunctionalComponent;