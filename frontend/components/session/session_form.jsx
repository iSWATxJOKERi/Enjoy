import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.formType === 'Log in' ? {
            username: "",
            password: ""
        } : { 
            username: "",
            password: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/"));
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        let form;
        let arr;
        let errors = this.props.errors;
        if(this.props.formType === 'Log in') {
            form = <div>
                <label>Username<input type="text" value={ this.state.username } onChange={ this.handleInput('username') } /></label>
                <label>Password<input type="password" value={ this.state.password } onChange={ this.handleInput('password') } /></label>
            </div>
        }else {
            form = <div>
                <label>Username<input type="text" value={ this.state.username } onChange={ this.handleInput('username') } /></label>
                <label>Password<input type="password" value={ this.state.password } onChange={ this.handleInput('password') } /></label>
                <label>Email<input type="email" value={ this.state.email } onChange={ this.handleInput('email') } /></label>
            </div>
        }
        if(errors.length > 0) {
            arr = errors.map((error, idx) => {
                return <li key={ idx }>{ error }</li>
            })
        }
        return (
            <div>
                <h1>{ this.props.formType }</h1>
                <form onSubmit={ this.handleSubmit }>
                    { form }
                    <button type="submit">Submit</button>
                </form>
                <ul>
                   { arr }
                </ul>
            </div>
        )
    }
}

export default SessionForm;