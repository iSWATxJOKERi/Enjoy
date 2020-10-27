import React from 'react';
import dateConverter from '../../../util/date_converter';

export default class UpNextItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        }
        this.videoClick = this.videoClick.bind(this);
    }

    videoClick() {
        // debugger
        this.props.history.push(`/videos/${ this.props.video.id }`);
        // this.setState({
        //     clicked: this.state.clicked + 1
        // })
    }

    render() {
        return (
            <div className="listed-vid" onClick={ () => this.videoClick() }>
                <img className="up-next-image" src={ this.props.video.photoUrl } />
                <div className="video-box-details">
                    <h2 className="video-box-title">{ this.props.video.title }</h2>
                    <span>{ this.props.video.uploader.username }</span>
                    <div className="video-box-date">
                        <span>6M views &#8226;</span>
                        <span> { dateConverter(this.props.video.created_at) }</span>
                    </div>
                </div>
            </div>
        )
    }
}