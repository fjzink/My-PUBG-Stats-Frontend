import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from '../styles/search_button.scss';
import { setPlatform, setRegion } from '../actions/search_actions';

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
        this.state = {
            gamertag: '',
        };
        this.onGamertagChange = this.onGamertagChange.bind(this);
        this.onPlatformChange = this.onPlatformChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const xboxParams = { params: { region: 'xbox-na' } };
        axios.get('http://localhost:3000/pubg/seasons', xboxParams)
            .then(response => console.log(response.data.data));
    }

    onPlatformChange(e, { value }) {
        this.setState({ platform: value, region: '' });
        this.props.setPlatform(value);
        this.props.setRegion('');
    }

    onRegionChange(e, { value }) {
        this.setState({ region: value });
        this.props.setRegion(value);
    }

    onGamertagChange(e, { value }) {
        this.setState({ gamertag: value });
    }

    onSubmit() {
        const { gamertag, platform, region } = this.state;
    }

    render() {
        const { gamertag } = this.state;
        const { platform, region } = this.props.searchOptions;
        return (
            <div className="PlayerStats">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group >
                    <Form.Input fluid width="8" label='Gamertag' placeholder='shroud' value={gamertag} onChange={this.onGamertagChange} />
                    <Form.Select fluid width="4" label='Platform' options={platforms} placeholder='Pick a Platform' value={platform} onChange={this.onPlatformChange}/>
                    <Form.Select fluid width="4" label='Region' options={platform === 'xbox' ? xboxRegions : pcRegions} placeholder='Pick a Region' value={region} onChange={this.onRegionChange} />
                    </Form.Group>
                    <Form.Button className={styles.searchbutton} color="yellow">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { searchOptions: state.searchOptions };
}

export default connect(mapStateToProps, { setPlatform, setRegion })(PlayerStats);
