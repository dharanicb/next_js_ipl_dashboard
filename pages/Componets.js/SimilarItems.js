import styles from "../Home.module.css"

const SimilarItems = ({items}) => (
    <ul className="flex flex-wrap justify-center">
    {items.map(team => (
        <li key = {team.id} className={styles.items}>
            <img src={team.competing_team_logo} alt={team.id} className="h-[120px] w-[120px]"/>
            <h1>{team.result}</h1>
            <p>match_status</p>
        </li>
    ))
    }
    </ul>
)
export default SimilarItems