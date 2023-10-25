import Link from "next/link"
import styles from "../Home.module.css"

const TeamList = ({data}) => (
    <ul className="flex justify-center flex-wrap">
        {data.map(ipl => (
        <li key = {ipl.id}>
            <Link href={`/${ipl.id}`} className={styles.card}>
            <img src={ipl.team_image_url} alt={ipl.id} className="h-[95px] self-center"/>
            <h1 className={`${styles.heading} ${styles.ipl_name} font-[20px]`}>{ipl.name}</h1>
            </Link>
        </li>
        ))}
    </ul>
)
export default TeamList