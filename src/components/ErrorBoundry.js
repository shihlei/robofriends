import React, {Component} from 'react';

class ErrorBoundry extends Component{ //繼承react component
	constructor(props){
		super(props); //access to this.props in the constructor
		this.state = {
			hasError:false
		}
	}

	//是lifecycle hook, 作用像是try/catch
	componentDidCatch(error, info){
		this.setState({hasError: true})
	}

	render(){
		if(this.state.hasError){
			return <h1>Ooops. not good.</h1>
		}
		return this.props.children //Cardlist
	}
}
export default ErrorBoundry;