import SimilarItems from "./Componets.js/SimilarItems"
import styles from "./Home.module.css"

const UserProfile = ({data}) => (
    <>
    {data &&
    <div className={styles.team_container}>
        <div className="flex justify-center">
            <img src={data.team_banner_url} alt ="teams" className="w-[89%] m-5"/>
        </div>
        <div className={`${styles.team_detils} w-[60%] self-center mt-5`}>
            <div className="text-[white] m-5 text-start">
                <h1 className="font-bold text-[25px] font-sans">{data.latest_match_details.competing_team}</h1>
                <p>{data.latest_match_details.date}</p>
                <p>{data.latest_match_details.venue}</p>
                <p>{data.latest_match_details.result}</p>
            </div>
            <div className="m-5"><img src = {data.latest_match_details.competing_team_logo} alt = "team logo" className="h-[130px]"/></div>
            <div className="text-[white] m-5 ml-[30px] text-end">
                <p>First Innings</p>
                <p>{data.latest_match_details.first_innings}</p>
                <h1 className="font-bold text-[25px] font-sans">second Innings</h1>
                <p>{data.latest_match_details.second_innings}</p>
                <h1 className="font-bold text-[25px] font-sans">Man of the match</h1>
                <p>{data.latest_match_details.man_of_the_match}</p>
                <h1 className="font-bold text-[25px] font-sans">Umpires</h1>
                <p>{data.latest_match_details.umpires}</p>
            </div>
        </div>
        <SimilarItems items = {data.recent_matches}/>
    </div> 
    }
    </>
    
)
export default UserProfile

// export async function getServerSideProps(context) {
//     const res = await fetch(`https://apis.ccbp.in/ipl/${context.params.id}`)
//     const data = await res.json()
//     console.log(data)
//     return { props: { data } }
// }

export async function getStaticPaths() {
    try {
      const res = await fetch('https://apis.ccbp.in/ipl')
      const posts = await res.json()
  
      if (Array.isArray(posts)) {
        const data = posts.map(post => ({ params: { id: post.id.toString() } }))
        return {
          paths: data,
          fallback: false,
        }
      } else {
        console.error('The fetched data is not an array:', posts)
        return {
          paths: [],
          fallback: false,
        };
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        paths: [],
        fallback: false,
      };
    }
  }
  
  

export async function getStaticProps({ params }) {
    const res = await fetch(`https://apis.ccbp.in/ipl/${params.id}`)
    const data = await res.json()
    return { props: { data } }
}