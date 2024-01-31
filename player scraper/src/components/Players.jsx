import styles from '../styles/players.module.css'
import { useState, useEffect} from 'react'

export default function Players (props) {
    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState(props.players)


    useEffect(()=>{
        setLoading(false)
    },[players])

    const handleClick = props.function
    return (
        loading ? 
        (<p>Loading...</p>) 
        : 
        (
            <>
            <div className={styles.container}>
                <div className={styles.playersContainer}>
                    {players.map((player) => (
                        <p className={styles.player}>{player}</p>
                    ))}
                </div>
                <button className={styles.button} onClick={()=> handleClick('Home')}>Click here to show teams</button>
            </div>
            </>
        )
    )
}