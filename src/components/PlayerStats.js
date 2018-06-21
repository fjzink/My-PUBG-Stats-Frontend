import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const platforms = [
  { key: 'xb', text: 'Xbox', value: 'xbox' },
  { key: 'pc', text: 'PC', value: 'pc' },
];

const xboxRegions = [
    { key: 'as', text: 'Asia', value: 'as' },
    { key: 'eu', text: 'Europe', value: 'eu' },
    { key: 'na', text: 'North America', value: 'na' },
    { key: 'oc', text: 'Oceania', value: 'as' },
];

const pcRegions = [
    { key: 'krjp', text: 'Korea', value: 'krjp' },
    { key: 'jp', text: 'Japan', value: 'jp' },
    { key: 'na', text: 'North America', value: 'na' },
    { key: 'eu', text: 'Europe', value: 'eu' },
    { key: 'ru', text: 'Russia', value: 'ru' },
    { key: 'oc', text: 'Oceania', value: 'oc' },
    { key: 'kakao', text: 'Kakao', value: 'kakao' },
    { key: 'sea', text: 'South East Asia', value: 'sea' },
    { key: 'sa', text: 'South and Central America', value: 'sa' },
    { key: 'as', text: 'Asia', value: 'as' },
];

class PlayerStats extends Component {
  constructor(props) {
      super(props);
      this.state = { platform: 'xbox' };
      this.onPlatformChange = this.onPlatformChange.bind(this);
  }

  onPlatformChange(e, { value }) {
      this.setState({ platform: value });
  }

  render() {
      const { platform } = this.state;
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Gamertag' placeholder='shroud' />
          <Form.Select fluid label='Platform' options={platforms} placeholder='Pick a Platform' onChange={this.onPlatformChange}/>
          <Form.Select fluid label='Region' options={platform === 'xbox' ? xboxRegions : pcRegions} placeholder='Pick a Region' />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default PlayerStats;
