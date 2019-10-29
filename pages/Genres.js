import Layout from './Layout'
import './genres.scss'
import Link from 'next/link'
import Navbar from '../components/navbar/Navbar'

class Genres extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genresList: [],
      animeInfo: [],
      genresID: 0,
      genresInfoBool: false
    }
    this.handleSelectCat = this.handleSelectCat.bind(this)
  }

  componentDidMount() {
    fetch('https://kitsu.io/api/edge/categories')
      .then((response) => response.json())
      .then((response) => {
        let result = []
        response.data.map((value) => {
          // console.log(`value[${index}] =`, value.attributes);
          result.push(value.attributes)
        })
        this.setState({ genresList: ['---', ...result] })
      })
  }

  componentWillUnmount() {
    this.setState({
      genresList: [],
      animeInfo: [],
      genresID: 0,
      genresInfoBool: false
    })
  }

  handleSelectCat(e) {
    this.setState({ genresID: parseInt(e.target.value) }, function anonymous() {
      this.handleFetchAnimeInfo()
    })
  }

  handleFetchAnimeInfo() {
    fetch(`https://kitsu.io/api/edge/categories/${this.state.genresID}/anime`)
      .then((response) => response.json())
      .then((response) => {
        console.log('response=', response.data)
        if (response.errors) {
          this.setState({ genresInfoBool: false })
          throw new Error()
        }

        this.setState({
          genresInfoBool: true,
          animeInfo: response.data
        })
      })
      .catch(function anonymous(err) {
        console.log('Unable fetch handleFetchAnimeInfo()', err)
      })
  }

  render() {
    // console.log(this.state)

    const renderCategoriesOption = this.state.genresList.map(function anonymous(value, index) {
      return (
        <option value={index} key={value.title}>
          {value.title}
        </option>
      )
    })

    const renderCategoriesSelect = this.state.genresList ? (
      <select onChange={this.handleSelectCat}>{renderCategoriesOption}</select>
    ) : (
      <React.Fragment></React.Fragment>
    )

    const isAnimeList = this.state.genresInfoBool ? (
      this.state.animeInfo.map(function anonymous(value, index) {
        // console.log(`value[${index}] = `, value)
        return (
          <Link href={`/genres/genresInfo?id=${value.id}`} as={`genres/genresInfo?id=${value.id}`} key={value.id}>
            <div className="anime_card_item">
              <h3>{value.attributes.canonicalTitle}</h3>
              <img src={value.attributes.posterImage.small} alt={value.attributes.posterImage.small}></img>
              <div className="anime_card_rate">
                <p>Rate: {value.attributes.averageRating}</p>
                <p>Tag: {value.attributes.ageRatingGuide}</p>
                <p>Age: {value.attributes.ageRating}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
      <div>false</div>
    )

    return (
      <React.Fragment>
        <Navbar />
        <div>Genres Components</div>
        {renderCategoriesSelect}
        <div className="anime_card_container">{isAnimeList}</div>
        {/* {renderAnimeList} */}
      </React.Fragment>
    )
  }
}

export default Genres
