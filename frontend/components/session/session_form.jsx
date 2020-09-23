import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.formType === 'Sign in' ? {
            email: "",
            password: "",
            active: true
        } : { 
            username: "",
            password: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleSubmit(e) {
        let form = this.props.formType === 'Sign in' ? 
            { email: this.state['email'], password: this.state['password'] } :
             { email: this.state['email'], password: this.state['password'], email: this.state['email']}
        e.preventDefault();
        const user = Object.assign({}, form);
        this.props.processForm(user).then(() => this.props.history.push("/"));
    }

    toggleForm() {
        const cs = this.state.active
        this.setState({
            active: !cs
        })
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
        if(this.props.formType === 'Sign in') {
            form = <div className="session-form">
                <div className="one">
                    <input className={ this.state.active ? "show email-field" : "hidden email"} placeholder="Email" type="text" value={ this.state.email } onChange={ this.handleInput('email') } />
                    <span className={ this.state.active ? "show" : "hidden"} onClick={ () => this.toggleForm() }>Next</span>
                </div>
                <div className="two">
                    <input className={ this.state.active ? "hidden password" : "show password password-field"} placeholder="Password" type="password" value={ this.state.password } onChange={ this.handleInput('password') } />
                    <span className={ this.state.active ? "hidden" : "show"} onClick={ () => this.toggleForm() }>Go Back</span>
                    <button className={ this.state.active ? "hidden submit-session password" : "show submit-session password" } type="submit">Submit</button>
                </div>
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
                    <form onSubmit={ this.handleSubmit }>
                        <h1 className="form-type">{ this.props.formType }</h1>
                        { form }
                    </form>
                    <ul className="errors">
                        { arr }
                    </ul>
                </div>
            </section>
        )
    }
}

export default SessionForm;