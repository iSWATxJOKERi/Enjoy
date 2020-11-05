import React from 'react';

class UserSub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribed_already: null,
            render: false
        }
        this.unsubscribe = this.unsubscribe.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    componentDidMount() {
        // debugger
        if(this.props.allProps.like.entities.users[this.props.user].subbed_to) {
            // debugger
            // console.log(this.props.allProps.like.entities.users[this.props.user])
            if(this.props.allProps.like.entities.users[this.props.user].subbed_to.includes(this.props.channel)) {
                // debugger
                // console.log(this.state.subscribed_already)
                this.setState({
                    subscribed_already: true
                })
            }
            this.setState({
                render: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.allProps.like.entities.users.subscription) {
            // debugger
            if(prevProps.allProps.like.entities.users.subscription !== this.props.allProps.like.entities.users.subscription) {
                // console.log(this.state.subscribed_already)
                this.setState({
                    subscribed_already: this.props.allProps.like.entities.users.subscription[0] ? true : false
                })
            }
        }
    }

    subscribe() {
        return () => {
            let sub = {"subscriber_id": this.props.user, "channel_id": this.props.channel}
            this.props.allProps.subscribe(sub).then(() => {
                this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                    this.setState({
                        subscribed_already: this.props.allProps.like.entities.users.subscription[0] ? true : false
                    })
                })
            })
        }
    }

    unsubscribe() {
        return () => {
            // debugger
            let sub = this.props.allProps.like.entities.users.subscription[0];
            this.props.allProps.unsubscribe(sub).then(() => {
                this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                    this.setState({
                        subscribed_already: this.props.allProps.like.entities.users.subscription[0] ? true : false
                    })
                })
            })
        }
    }

    render() {
        let btn = "";
        if(this.state.render) {
            // debugger
            btn = this.state.subscribed_already ? 
            <span onClick={ this.unsubscribe() } id="unsubscribe2">UNSUBSCRIBE</span> : 
            <span onClick={ this.subscribe() } id="subscribe2">SUBSCRIBE</span>
        }
        return (
            <>
            { btn }
            </>
        )
    }
}

export default UserSub;