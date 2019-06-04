import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({track_list: res.data.message.body.track_list});
                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`);
            })
            .then(res => {
                this.setState({track: res.data.message.body.track});
            })
            .catch(err => console.log(err));
    }
    render() {
        const {track, lyrics} = this.state;
        if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
            return <Spinner/>
        } else {
            return (
                <Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className="card">
                        <div className="card-header">
                            {track.track_name} <span className="text-secondary">{track.artist_name}</span>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}

export default Lyrics;
