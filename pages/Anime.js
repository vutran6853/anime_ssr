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

    // fetch('https://kitsu.io/api/edge/categories')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log('response=', response.data)
    //     let result = []
    //     response.data.map((value, index) => {
    //       // console.log(`value[${index}] =`, value.attributes);
    //       result.push(value.attributes)
    //     })
    //     this.setState({ animeCategories: result })
    //   })
  }

  componentWillUnmount() {
    this.setState({
      animeListData: null,
      signleAnimeInfo: null,
      animeCategories: null
    })
  }

  handleClickSingleInfo = (passID) => {
    console.log('handleClickSingleInfo', passID)

    // fetch(`https://kitsu.io/api/edge/anime/${passID}`)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log('response=', response.data)
    // if (response.errors === response.data) {
    //   console.log('true')
    // }
    // let result = []
    // response.data.map((value, index) => {
    //   // console.log(`value[${index}] =`, value.attributes);
    //   result.push(value.attributes)
    // })
    // this.setState({ signleAnimeInfo: result })
    // })
  }

  render() {
    console.log(this)

    const renderAnimeList = this.state.animeListData ? (
      this.state.animeListData.map((value, index) => {
        // console.log(`value[${index}] =`, value)
        return (
          <Link href={`/anime/AnimeInfo?id=${index + 1}`} as={`/anime?id=${index + 1}`} key={value.canonicalTitle}>
            <div className="anime_card_item">
              <h3>{value.canonicalTitle}</h3>
              <img src={value.posterImage.small} alt={value.posterImage.small}></img>
              {/* <p>{value.createdAt}</p> */}
              {/* <p>{value.episodeCount}</p> */}
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
      <Layout>
        <div className="anime_card_container">{renderAnimeList}</div>
      </Layout>
    )
  }
}

export default withRouter(Anime)
