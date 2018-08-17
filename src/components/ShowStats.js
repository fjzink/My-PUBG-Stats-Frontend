import React from 'react';
import { Card, Table, Popup, Form } from 'semantic-ui-react';
import round from 'lodash/round';

import styles from '../styles/showstats.scss';

const gameModeOptions = [
    {
        text: 'Solo',
        value: 'solo',
        key: 'solo',
    },
    {
        text: 'Solo FPP',
        value: 'solo-fpp',
        key: 'solo-fpp',
    },
    {
        text: 'Duo',
        value: 'duo',
        key: 'duo',
    },
    {
        text: 'Duo FPP',
        value: 'duo-fpp',
        key: 'duo-fpp',
    },
    {
        text: 'Squad',
        value: 'squad',
        key: 'squad',
    },
    {
        text: 'Squad FPP',
        value: 'squad-fpp',
        key: 'squad-fpp',
    },
];

const kdRatio = (kills, losses) => {
    if (losses <= 0) {
        return 0;
    }

    return round((kills / losses), 2);
};

const winPercentage = (wins, roundsPlayed) => {
    if (roundsPlayed <= 0) {
        return 0;
    }

    return round(((wins / roundsPlayed) * 100), 1);
};

export default (props) => {
    const handleGameMode = (e, { value }) => props.setGameMode(value);
    const { activeMode } = props;
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
        heals,
        boosts,
        revives,
        maxKillStreaks,
        roundMostKills,
        longestKill,
        timeSurvived,
        longestTimeSurvived,
        walkDistance,
        rideDistance,
        vehicleDestroys,
        weaponsAcquired,
        roundsPlayed,
        top10s,
        wins,
    } = props.stats[activeMode];

    return (
        <div className={`ShowStats ${styles.showStats}`}>
            <Form className={styles.gameMode}>
                <Form.Select
                    width='6'
                    options={gameModeOptions}
                    onChange={handleGameMode}
                    value={activeMode}
                />
            </Form>
            <Card.Group centered>
                <Card raised className='kills'>
                    <Card.Content>
                        <Card.Header textAlign='center'>Kills</Card.Header>
                        <Table definition striped unstackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Kills</Table.Cell>
                                    <Table.Cell>{kills}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Popup
                                            trigger={<span>DBNOs</span>}
                                            content='Number of players knocked.'
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{dBNOs}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Assists</Table.Cell>
                                    <Table.Cell>{assists}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Damage Dealt</Table.Cell>
                                    <Table.Cell>{round(damageDealt)}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>KD Ratio</Table.Cell>
                                    <Table.Cell>{kdRatio(kills, losses)}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card raised className='misc-kills'>
                    <Card.Content>
                        <Card.Header textAlign='center'>Misc. Kill Stats</Card.Header>
                        <Table definition striped unstackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Headshot Kills</Table.Cell>
                                    <Table.Cell>{headshotKills}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Road Kills</Table.Cell>
                                    <Table.Cell>{roadKills}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Suicides</Table.Cell>
                                    <Table.Cell>{suicides}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Team Kills</Table.Cell>
                                    <Table.Cell>{teamKills}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card raised className='healing'>
                    <Card.Content>
                        <Card.Header textAlign='center'>Healing</Card.Header>
                        <Table definition striped unstackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Heals</Table.Cell>
                                    <Table.Cell>{heals}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Boosts</Table.Cell>
                                    <Table.Cell>{boosts}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Revives</Table.Cell>
                                    <Table.Cell>{revives}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card raised className='streaks'>
                    <Card.Content>
                        <Card.Header textAlign='center'>Streaks</Card.Header>
                        <Table definition striped unstackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Kill Streak</Table.Cell>
                                    <Table.Cell>{maxKillStreaks}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Round Most Kills</Table.Cell>
                                    <Table.Cell>{roundMostKills}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Longest Time Survived</Table.Cell>
                                    <Table.Cell>{round(longestTimeSurvived)} s</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card raised className='records'>
                    <Card.Content>
                        <Card.Header textAlign='center'>Records</Card.Header>
                        <Table definition striped unstackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Total Time Survived</Table.Cell>
                                    <Table.Cell>{round(timeSurvived)} s</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Longest Kill Distance</Table.Cell>
                                    <Table.Cell>{round(longestKill)} m</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Total Walk Distance</Table.Cell>
                                    <Table.Cell>{round(walkDistance)} m</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Total Ride Distance</Table.Cell>
                                    <Table.Cell>{round(rideDistance)} m</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Vehicles Destroyed</Table.Cell>
                                    <Table.Cell>{vehicleDestroys}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Weapons Acquired</Table.Cell>
                                    <Table.Cell>{weaponsAcquired}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card raised className='matches'>
                    <Card.Content>
                        <Card.Header textAlign='center'>Matches</Card.Header>
                        <Table definition striped unstackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Matches Played</Table.Cell>
                                    <Table.Cell>{roundsPlayed}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Top 10s</Table.Cell>
                                    <Table.Cell>{top10s}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Wins</Table.Cell>
                                    <Table.Cell>{wins}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Losses</Table.Cell>
                                    <Table.Cell>{losses}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Win Percentage</Table.Cell>
                                    <Table.Cell>
                                        {winPercentage(wins, roundsPlayed)} %
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};
