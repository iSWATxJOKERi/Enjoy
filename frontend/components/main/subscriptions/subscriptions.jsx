import React from 'react';

class Subscription extends React.Component {
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
            if(this.props.allProps.like.entities.users[this.props.user].subbed_to.includes(this.props.channel)) {
                // debugger
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
            if(prevProps.allProps.like.entities.users.subscription !== this.props.allProps.like.entities.users.subscription) {
                this.setState({
                    subscribed_already: this.props.allProps.like.entities.users.subscription[this.props.channel] ? true : false
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
                        subscribed_already: this.props.allProps.like.entities.users.subscription[this.props.channel] ? true : false
                    })
                })
            })
        }
    }

    unsubscribe() {
        return () => {
            // debugger
            let sub = this.props.allProps.like.entities.users.subscription[this.props.channel];
            this.props.allProps.unsubscribe(sub).then(() => {
                this.props.allProps.fetchUser(this.props.allProps.currentUser).then(() => {
                    this.setState({
                        subscribed_already: this.props.allProps.like.entities.users.subscription[this.props.channel] ? true : false
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
            <span onClick={ this.unsubscribe() } id="unsubscribe">UNSUBSCRIBE</span> : 
            <span onClick={ this.subscribe() } id="subscribe">SUBSCRIBE</span>
        }
        return (
            <>
            { btn }
            </>
        )
    }
}

export default Subscription;