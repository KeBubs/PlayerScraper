import styles from '../styles/teams.module.css'

export default function Teams (props) {
    const handleClick = props.function
    const teams = props.teams
    return (
        <div className={styles.container}>
        <p>Select a team to show the players</p>
        <div className={styles.teamContainer}>
            {teams.map((team)=>(
                <button className={styles.team} value={team} onClick={() => handleClick(team)}>{team}</button>
            ))}
            
        </div>
        </div>
        
    )
}