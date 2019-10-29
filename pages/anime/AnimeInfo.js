import './animeInfo.scss'
import Link from 'next/link'
import Navbar from '../../components/navbar/Navbar'

class AnimeInfo extends React.Component {
  state = {
    animeInfoData: {},
    animeInfoImageData: []
  }

  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/anime/${this.props.url.query.id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          animeInfoData: response.data.attributes,
          animeInfoImageData: response.data.attributes.posterImage
        })
      })
      .catch((err) => console.error('Danger unable to fetch at AnimeInfo' + err))
  }

  render() {
    const renderAnimeInfo = this.state.animeInfoData ? (
      <div className="animeInfo_card_item">
        <h3>{this.state.animeInfoData.canonicalTitle}</h3>
        <img src={this.state.animeInfoImageData.medium} alt={this.state.animeInfoData.canonicalTitle} />
        <p>
          <strong>Description: </strong> {this.state.animeInfoData.synopsis}
        </p>
        <div className="animeInfo_card_rate_info">
          <p>
            <strong>Age:</strong> {this.state.animeInfoData.ageRating}
          </p>
          <p>
            <strong>Tag:</strong> {this.state.animeInfoData.ageRatingGuide}
          </p>
          <p>
            <strong>Rate:</strong> {this.state.animeInfoData.averageRating}
          </p>
          <p>
            <strong>Episode Length:</strong> {this.state.animeInfoData.episodeLength}
          </p>
          <p>
            <strong>Popularity Rank:</strong> {this.state.animeInfoData.popularityRank}
          </p>
          <p>
            <strong>Release Date:</strong> {this.state.animeInfoData.startDate}
          </p>
        </div>
      </div>
    ) : (
      <div>False</div>
    )

    return (
      <div className="animeInfo_card_container">
        {renderAnimeInfo}
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    )
  }
}

export default AnimeInfo
