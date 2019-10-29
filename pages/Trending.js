import Layout from './Layout'
import './trending.scss'
import Link from 'next/link'

class Trending extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trendingAnimeList: [],
      trendingMangaList: []
    }
  }

  componentDidMount() {
    // console.log('enter mount')
    fetch('https://kitsu.io/api/edge/trending/anime')
      .then((response) => response.json())
      .then((response) => {
        // console.log('response=', response.data)
        this.setState({
          trendingAnimeList: response.data
          // animeInfo: response.data.map((value) => value.attributes)
        })
      })
      .catch((err) => {
        console.log('Unable fetch Trending list', err)
      })

    fetch('https://kitsu.io/api/edge/trending/manga')
      .then((response) => response.json())
      .then((response) => {
        console.log('response=', response.data)
        this.setState({
          trendingMangaList: response.data
          // animeInfo: response.data.map((value) => value.attributes)
        })
      })
      .catch((err) => {
        console.log('Unable fetch Trending list', err)
      })
  }

  render() {
    const { trendingMangaList, trendingAnimeList } = this.state
    const renderTrendingAnimeList = this.state.trendingAnimeList.map((value, index) => {
      // console.log('value', value)
      console.log('trendingMangaList = ', this.state.trendingMangaList[index])
      return (
        <Link href={`/anime/AnimeInfo?id=${value.id}`} as={`/anime?id=${value.id}`} key={value.canonicalTitle}>
          <div className="trending_card_item">
            <h3>{value.attributes.canonicalTitle}</h3>
            <img src={value.attributes.posterImage.small} alt={value.attributes.posterImage.small}></img>
            <div className="trending_card_rate">
              <p>Rate: {value.attributes.averageRating ? value.attributes.averageRating : 'N/A'}</p>
              {/* <p>Tag: {value.attributes.ageRatingGuide}</p> */}
              <p>Age: {value.attributes.ageRating ? value.attributes.ageRating : 'N/A'}</p>
            </div>
          </div>
        </Link>
      )
    })
    // const TrendingAnimeList = this.state.Trending ? (
    //   this.state.TrendingAnimeList.map((value, index) => {
    //     // console.log(`value[${index}] = `, value)
    //     return (
    //       <Link
    //         href={`/trending/trendingInfo?url=${value.links.self}`}
    //         as={`/trending?id=${value.id}`}
    //         key={value.attributes.canonicalTitle}>
    //         <div className="trending_card_item">
    //           <h3>{value.attributes.canonicalTitle}</h3>
    //           <img src={value.attributes.posterImage.small} alt={value.attributes.posterImage.small}></img>
    //           <div className="trending_card_rate">
    //             <p>Rate: {value.attributes.averageRating ? value.attributes.averageRating : 'N/A'}</p>
    //             {/* <p>Tag: {value.attributes.ageRatingGuide}</p> */}
    //             <p>Age: {value.attributes.ageRating ? value.attributes.ageRating : 'N/A'}</p>
    //           </div>
    //         </div>
    //       </Link>
    //     )
    //   })
    // ) : (
    //   <React.Fragment></React.Fragment>
    // )

    return (
      <Layout>
        <div>Trending Component</div>
        <div className="trending_card_container">{renderTrendingAnimeList}</div>
      </Layout>
    )
  }
}

export default Trending
