import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign in'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);