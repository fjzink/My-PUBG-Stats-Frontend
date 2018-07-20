import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from '../styles/search_button.scss';
import { setPlatform, setRegion, setGamertag } from '../actions/search_actions';
import { setSeasons } from '../actions/seasons_actions';

const platforms = [
  { key: 'xb', text: 'Xbox', value: 'xbox' },
  { key: 'pc', text: 'PC', value: 'pc' },
];

const xboxRegions = [
    { key: 'na', text: 'North America', value: 'na' },
    { key: 'eu', text: 'Europe', value: 'eu' },
    { key: 'as', text: 'Asia', value: 'as' },
    { key: 'oc', text: 'Oceania', value: 'oc' },
];

const pcRegions = [
    { key: 'na', text: 'North America', value: 'na' },
    { key: 'eu', text: 'Europe', value: 'eu' },
    { key: 'sa', text: 'South and Central America', value: 'sa' },
    { key: 'krjp', text: 'Korea', value: 'krjp' },
    { key: 'jp', text: 'Japan', value: 'jp' },
    { key: 'oc', text: 'Oceania', value: 'oc' },
    { key: 'kakao', text: 'Kakao', value: 'kakao' },
    { key: 'sea', text: 'South East Asia', value: 'sea' },
    { key: 'as', text: 'Asia', value: 'as' },
    { key: 'ru', text: 'Russia', value: 'ru' },
];

class PlayerStats extends Component {
    constructor(props) {
        super(props);
        this.onGamertagChange = this.onGamertagChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onPlatformChange = this.onPlatformChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let lastUpdated = localStorage.getItem('seasonsUpdated');
        lastUpdated = parseInt(lastUpdated, 10);
        const timeSinceUpdated = Date.now() - lastUpdated;
        const oneDay = 24 * 60 * 60 * 1000;
        let seasons = localStorage.getItem('seasons');
        if (seasons && (timeSinceUpdated < oneDay)) {
            seasons = JSON.parse(seasons);
            this.props.setSeasons(seasons);
        } else {
            this.fetchSeasons();
        }
    }

    fetchSeasons() {
        const xboxParams = { params: { region: 'xbox-na' } };
        const pcParams = { params: { region: 'pc-na' } };
        const seasonsURL = 'http://localhost:3000/pubg/seasons';
        axios.all([
            axios.get(seasonsURL, xboxParams),
            axios.get(seasonsURL, pcParams),
        ])
            .then(axios.spread((xboxRes, pcRes) => {
                const seasons = {
                    xboxSeasons: xboxRes.data.data,
                    pcSeasons: pcRes.data.data,
                };
                localStorage.setItem('seasons', JSON.stringify(seasons));
                localStorage.setItem('seasonsUpdated', Date.now());
                this.props.setSeasons(seasons);
            }));
    }

    onPlatformChange(e, { value }) {
        this.props.setPlatform(value);
        this.props.setRegion('');
    }

    onRegionChange(e, { value }) {
        this.props.setRegion(value);
    }

    onGamertagChange(e, { value }) {
        this.props.setGamertag(value);
    }

    onSubmit() {
        const { gamertag, platform, region } = this.state;
    }

    render() {
        const { platform, region, gamertag } = this.props.searchOptions;
        const { seasons } = this.props;
        return (
            <div className="PlayerStats">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group >
                    <Form.Input fluid width="8" label='Gamertag' placeholder='shroud' value={gamertag} onChange={this.onGamertagChange} />
                    <Form.Select fluid width="4" label='Platform' options={platforms} placeholder='Pick a Platform' value={platform} onChange={this.onPlatformChange}/>
                    <Form.Select fluid width="4" label='Region' options={platform === 'xbox' ? xboxRegions : pcRegions} placeholder='Pick a Region' value={region} onChange={this.onRegionChange} />
                    </Form.Group>
                    <Form.Button className={styles.searchbutton} color="yellow">Search</Form.Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchOptions: state.searchOptions,
        seasons: state.seasons,
    };
}

export default connect(mapStateToProps, {
    setPlatform,
    setRegion,
    setSeasons,
    setGamertag,
})(PlayerStats);
