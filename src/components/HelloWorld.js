import React from 'react';

class HelloWorld extends React.Component {
    render(){
        return (
        <p>Hello World! {this.props.name}</p>
        );
    }
}

export default HelloWorld;