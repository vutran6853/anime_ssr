import Layout from './Layout'
import './manga.scss'
import Link from 'next/link'

class Manga extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mangaList: [],
      isManga: false
    }
  }

  componentDidMount() {
    console.log('enter mount')
    fetch(`https://kitsu.io/api/edge/manga`)
      .then((response) => response.json())
      .then((response) => {
        console.log('response=', response.data)
        if (response.errors) {
          this.setState({ isManga: false })
          throw new Error()
        }

        this.setState({
          isManga: true,
          mangaList: response.data
          // animeInfo: response.data.map((value) => value.attributes)
        })
      })
      .catch((err) => {
        console.log('Unable fetch Manga list', err)
      })
  }

  render() {
    const isMangaList = this.state.isManga ? (
      this.state.mangaList.map((value, index) => {
        // console.log(`value[${index}] = `, value)
        return (
          <Link
            href={`/manga/mangaInfo?url=${value.links.self}`}
            as={`/manga?id=${value.id}`}
            key={value.attributes.canonicalTitle}>
            <div className="manga_card_item">
              <h3>{value.attributes.canonicalTitle}</h3>
              <img src={value.attributes.posterImage.small} alt={value.attributes.posterImage.small}></img>
              <div className="manga_card_rate">
                <p>Rate: {value.attributes.averageRating ? value.attributes.averageRating : 'N/A'}</p>
                {/* <p>Tag: {value.attributes.ageRatingGuide}</p> */}
                <p>Age: {value.attributes.ageRating ? value.attributes.ageRating : 'N/A'}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
      <React.Fragment></React.Fragment>
    )

    return (
      <Layout>
        <div>Manga Component</div>
        <div className="manga_card_container">{isMangaList}</div>
      </Layout>
    )
  }
}

export default Manga
