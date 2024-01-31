import styles from '../styles/teams.module.css'

export default function Teams (props) {
    const handleClick = props.function
    const teams = props.teams
    return (
        <>
        <p>Select a team to show the players</p>
        <div className={styles.container}>
            {teams.map((team)=>(
                <button className={styles.team} value={team} onClick={() => handleClick(team)}>{team}</button>
            ))}
            
        </div>
        </>
        
    )
}