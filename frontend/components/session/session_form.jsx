import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../font_awesome';

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
        this.handleInput = this.handleInput.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleSubmit(e) {
        let form = this.props.formType === 'Sign in' ? 
            { email: this.state['email'], password: this.state['password'] } :
             { email: this.state['email'], password: this.state['password'], username: this.state['username']}
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
        let form2;
        let arr;
        const user = <FontAwesomeIcon icon="user-circle" />
        let errors = this.props.errors;
        if(this.props.formType === 'Sign in') {
            form = <div className="session-form">
                <div className={ this.state.active ? "show one" : "hidden"}>
                    <input className={ this.state.active ? "show email-field" : "hidden email"} placeholder="Email" type="text" value={ this.state.email } onChange={ this.handleInput('email') } />
                    <Link id="slink" to="/signup">Create an account</Link>
                    <span className={ this.state.active ? "show" : "hidden"} onClick={ () => this.toggleForm() }>Next</span>
                </div>
                <div className={ this.state.active ? "hidden" : "show two"}>
                    <input className={ this.state.active ? "hidden password" : "show password password-field"} placeholder="Password" type="password" value={ this.state.password } onChange={ this.handleInput('password') } />
                    <span className={ this.state.active ? "hidden" : "show"} onClick={ () => this.toggleForm() }>Go Back</span>
                    <button className={ this.state.active ? "hidden submit-session password" : "show submit-session password" } type="submit">Submit</button>
                </div>
            </div>
        }else {
            form2 = <div className="session-form2">
                <div className="formleft">
                    <div className="top-form">
                        <img onClick={ () => this.props.history.push("/") } className={ this.props.formType === 'Sign in' ? "logo" : "logo-signup" } src={ window.logo } />
                        <h1 className={ this.props.formType === 'Sign in' ? "form-type" : "form-type2"}>{ this.props.formType }</h1>
                        <p className={ this.props.formType === 'Sign in' ? "p" : "p-signup" }>to continue to Enjoy</p>
                    </div>
                    <input className="username-field2" type="text" placeholder="Username" value={ this.state.username } onChange={ this.handleInput('username') } />
                    <input className="password-field2" type="password" placeholder="Password" value={ this.state.password } onChange={ this.handleInput('password') } />
                    <input className="email-field2" type="email" value={ this.state.email } placeholder="Email" onChange={ this.handleInput('email') } />
                    <Link id="slink2" to="/login">Sign in instead</Link>
                    <button className="submit-session2" type="submit">Submit</button>
                </div>
                <div className="formright">
                    { user }
                </div>
            </div>
        }
        if(errors.length > 0) {
            arr = errors.map((error, idx) => {
                return <li key={ idx }>{ error }</li>
            })
        }
        const signin = <div className="sb"><img onClick={ () => this.props.history.push("/") } className={ this.props.formType === 'Sign in' ? "logo" : "logo-signup" } src={ window.logo } />
        <h1 className={ this.props.formType === 'Sign in' ? "form-type" : "form-type2"}>{ this.props.formType }</h1>
        <p className={ this.props.formType === 'Sign in' ? "p" : "p-signup" }>to continue to Enjoy</p></div>
        return (
            <section className="container">
                <div className={ this.props.formType === 'Sign in' ? "form" : "otherform" }>
                    <form className={ this.props.formType === 'Sign in' ? "form1" : "form2" } onSubmit={ this.handleSubmit }>
                        { this.props.formType === 'Sign in' ? 
                        signin: null }
                        { this.props.formType === 'Sign in' ? form : form2}
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