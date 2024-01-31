import styles from '../styles/players.module.css'
import { useState, useEffect} from 'react'

export default function Players (props) {
    
    const players = props.players
    const team = props.selectedTeam
    const handleClick = props.function
    return (
            <>
            <div className={styles.container}>
                <h5>Showing players for {team}</h5>
                <div className={styles.playersContainer}>
                    {players.map((player) => (
                        <p className={styles.player}>{player}</p>
                    ))}
                </div>
                <button className={styles.button} onClick={()=> handleClick('Home')}>Click here to show teams</button>
            </div>
            </>

    )
}