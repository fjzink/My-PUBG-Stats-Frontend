import React from 'react';
import { Table } from 'semantic-ui-react';

export default (props) => {
    const {
        kills,
        dBNOs,
        assists,
        damageDealt,
        headshotKills,
        roadKills,
        suicides,
        teamKills,
        losses,
    } = props.currentPlayerStats['duo-fpp'];
    return (
        <div className='ShowStats'>
            <Table collapsing celled className='kills-deaths'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='9'>Kills/Deaths</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Kills</Table.HeaderCell>
                        <Table.HeaderCell>DBNOs</Table.HeaderCell>
                        <Table.HeaderCell>Assists</Table.HeaderCell>
                        <Table.HeaderCell>Damage Dealt</Table.HeaderCell>
                        <Table.HeaderCell>Headshot Kills</Table.HeaderCell>
                        <Table.HeaderCell>Road Kills</Table.HeaderCell>
                        <Table.HeaderCell>Suicides</Table.HeaderCell>
                        <Table.HeaderCell>Team Kills</Table.HeaderCell>
                        <Table.HeaderCell>KD Ratio</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{kills}</Table.Cell>
                        <Table.Cell>{dBNOs}</Table.Cell>
                        <Table.Cell>{assists}</Table.Cell>
                        <Table.Cell>{damageDealt}</Table.Cell>
                        <Table.Cell>{headshotKills}</Table.Cell>
                        <Table.Cell>{roadKills}</Table.Cell>
                        <Table.Cell>{suicides}</Table.Cell>
                        <Table.Cell>{teamKills}</Table.Cell>
                        <Table.Cell>{kills / losses}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};
