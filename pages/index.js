import  styles from "./Home.module.css"
import TeamList from "./Componets.js/TeamList";

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <div className="flex justify-center">
        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" className="h-[55px] mt-[20px]" alt="ipl logo"/> 
        <h1 className={styles.heading}>IPL Dashbord</h1>
      </div>
      <TeamList data = {data}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://apis.ccbp.in/ipl')
  const posts = await res.json()
  console.log(posts.teams);
  return {
    props: {
      data : posts.teams,
    },
  }
}