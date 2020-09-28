import React from 'react';
import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // debugger
        const allvids = this.props.videos.map(video => {
            return <VideoIndexItem key={ video.id } allProps={ this.props.allProps } video={ video } />
        })
        return (
            <section className="recommended">
                <div className="dup">
                    { allvids }
                </div>
            </section>
        )
    }
} 