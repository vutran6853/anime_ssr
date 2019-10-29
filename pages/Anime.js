import './anime.scss'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Layout from './Layout'

class Anime extends React.Component {
  state = {
    animeListData: null,
    signleAnimeInfo: null,
    animeCategories: null
  }

  componentDidMount() {
    fetch('https://kitsu.io/api/edge/anime')
      .then((response) => response.json())
      .then((response) => {
        // console.log('response=', response.data)
        let result = []
        response.data.map((value, index) => {
          // console.log(`value[${index}] =`, value.attributes);
          result.push(value.attributes)
        })
        this.setState({ animeListData: result })
      })
  }

  componentWillUnmount() {
    this.setState({
      animeListData: null,
      signleAnimeInfo: null,
      animeCategories: null
    })
  }

  render() {
    const renderAnimeList = this.state.animeListData ? (
      this.state.animeListData.map((value, index) => {
        return (
          <Link href={`/anime/AnimeInfo?id=${index + 1}`} as={`?id=${index + 1}`} key={value.canonicalTitle}>
            <div className="anime_card_item">
              <h3>{value.canonicalTitle}</h3>
              <img src={value.posterImage.small} alt={value.posterImage.small}></img>
              <div className="anime_card_rate">
                <p>Rate: {value.averageRating}</p>
                <p>Tag: {value.ageRatingGuide}</p>
                <p>Age: {value.ageRating}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
      <p>Loading...</p>
    )

    return (
      <React.Fragment>
        <div className="anime_card_container">{renderAnimeList}</div>
      </React.Fragment>
    )
  }
}

export default withRouter(Anime)
