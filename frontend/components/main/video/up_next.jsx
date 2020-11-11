import React from 'react';
import dateConverter from '../../../util/date_converter';
import UpNextItem from './list_vids_item';

class UpNext extends React.Component {
    constructor(props) {
        super(props);
        this.videoClick = this.videoClick.bind(this);
    }

    videoClick() {
        this.props.history.push(`/videos/${ this.props.videos[0].id }`);
    }

    render() {
        let vids = this.props.videos.slice(1);
        let arr;
        arr = vids.map(vid => {
            return <UpNextItem key={ vid.id } history={ this.props.history } video={ vid } />
        })
        // console.log(arr)
        // console.log(this.props.videos[0])
        return (
            <section className="secondary">
                <div className="up-next">
                    <span>Up next</span>
                    <div className="video-box" onClick={ () => this.videoClick() }>
                        <img className="up-next-image" src={ `${ this.props.videos[0].photoUrl }` } />
                        <div className="video-box-details">
                            <h2 className="video-box-title">{ this.props.videos[0].title }</h2>
                            <span>{ this.props.videos[0].uploader.username }</span>
                            <div className="video-box-date">
                                <span>6M views &#8226;</span>
                                <span> { dateConverter(this.props.videos[0].created_at) }</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-of-videos">
                    { arr }
                </div>
            </section>
        )
    }
}

export default UpNext;