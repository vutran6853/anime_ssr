import './mangaInfo.scss'
import Link from 'next/link'

class MangaInfo extends React.Component {
  state = {
    mangaInfoData: {},
    mangaInfoImageData: []
  }

  componentDidMount() {
    console.log(this.props.url)
    fetch(`${this.props.url.query.url}`)
      .then((response) => response.json())
      .then((response) => {
        console.log('response=', response.data)
        this.setState({
          mangaInfoData: response.data.attributes,
          mangaInfoImageData: response.data.attributes.posterImage
        })
      })
      .catch((err) => console.error('Danger unable to fetch at MangaInfo' + err))
  }

  componentWillUnmount() {
    this.setState({
      mangaInfoData: {},
      mangaInfoImageData: []
    })
  }

  render() {
    console.log(this.state)
    let { mangaInfoImageData, mangaInfoData } = this.state

    const renderMangaInfo = mangaInfoData ? (
      <div className="mangaInfo_card_item">
        <h3>{mangaInfoData.canonicalTitle}</h3>
        <img src={mangaInfoImageData.medium} alt={mangaInfoData.canonicalTitle} />
        <p>
          <strong>Desc: </strong> {mangaInfoData.synopsis}
        </p>
        <span className="mangaInfo_card_rate_info">
          <p>
            <strong>ageRating:</strong> {mangaInfoData.ageRating ? mangaInfoData.ageRating : 'N/A'}
          </p>
          <p>
            <strong>ageRatingGuide:</strong> {mangaInfoData.ageRatingGuide ? mangaInfoData.ageRatingGuide : 'N/A'}
          </p>
        </span>
        <p>
          <strong>Type:</strong> {mangaInfoData.mangaType}
        </p>
        <p>
          <strong>popularityRank:</strong> {mangaInfoData.popularityRank}
        </p>
        <p>
          <strong>Release Date:</strong> {mangaInfoData.startDate ? mangaInfoData.startDate : 'N/A'}
        </p>
      </div>
    ) : (
      <React.Fragment>False</React.Fragment>
    )

    return (
      <div className="mangaInfo_card_container">
        {renderMangaInfo}
        <Link href="">
          <button>Home</button>
        </Link>
      </div>
    )
  }
}

export default MangaInfo
