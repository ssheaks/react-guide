import React, {Component} from 'react';
class ErrorBoundary extends Component {
    // only render if there is an error
    state = {
        hasError: false,
        errorMessage: ''
    }

    //method that receives potential error and information
    componentDidCatch = (error, info) => {
        this.setState({hasError:true, errorMessage: error});
    }

    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;