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
            form = <div className="session-form">
                <label className="username">Username<input className="username-field" type="text" value={ this.state.username } onChange={ this.handleInput('username') } /></label>
                <label className="password">Password<input className="password-field" type="password" value={ this.state.password } onChange={ this.handleInput('password') } /></label>
                <button className="submit-session" type="submit">Submit</button>
            </div>
        }else {
            form = <div className="session-form">
                <label className="username">Username<input className="username-field" type="text" value={ this.state.username } onChange={ this.handleInput('username') } /></label>
                <label className="password">Password<input className="password-field" type="password" value={ this.state.password } onChange={ this.handleInput('password') } /></label>
                <label className="email">Email<input className="email-field" type="email" value={ this.state.email } onChange={ this.handleInput('email') } /></label>
                <button className="submit-session" type="submit">Submit</button>
            </div>
        }
        if(errors.length > 0) {
            arr = errors.map((error, idx) => {
                return <li key={ idx }>{ error }</li>
            })
        }
        return (
            <section className="container">
                <div className="form">
                    <div className="inner-form">
                        <form onSubmit={ this.handleSubmit }>
                            <h1 className="form-type">{ this.props.formType }</h1>
                            { form }
                        </form>
                    </div>
                </div>
                <ul>
                   { arr }
                </ul>
            </section>
        )
    }
}

export default SessionForm;