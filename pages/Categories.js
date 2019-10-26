import Layout from './Layout'
import './categories.scss'
import Link from 'next/link'

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesList: [],
      animeInfo: [],
      categoriesID: 0,
      animeInfoBool: false
    }
    this.handleSelectCat = this.handleSelectCat.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount Cat')
    fetch('https://kitsu.io/api/edge/categories')
      .then((response) => response.json())
      .then((response) => {
        let result = []
        response.data.map((value) => {
          // console.log(`value[${index}] =`, value.attributes);
          result.push(value.attributes)
        })
        this.setState({ categoriesList: ['---', ...result] })
      })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount Cat')
  }

  handleSelectCat(e) {
    this.setState({ categoriesID: parseInt(e.target.value) }, function anonymous() {
      this.handleFetchAnimeInfo()
    })
  }

  handleFetchAnimeInfo() {
    console.log('handleFetchAnimeInfo', this.state.categoriesID)

    fetch(`https://kitsu.io/api/edge/categories/${this.state.categoriesID}/anime`)
      .then((response) => response.json())
      .then((response) => {
        console.log('response=', response.data)
        if (response.errors) {
          this.setState({ animeInfoBool: false })
          throw new Error()
        }

        this.setState({
          animeInfoBool: true,
          animeInfo: response.data
          // animeInfo: response.data.map((value) => value.attributes)
        })
      })
      .catch((err) => {
        console.log('Unable fetch handleFetchAnimeInfo()', err)
      })
  }

  render() {
    // console.log(this.state)

    const renderCategoriesOption = this.state.categoriesList.map((value, index) => {
      return (
        <option value={index} key={value.title}>
          {value.title}
        </option>
      )
    })

    const renderCategoriesSelect = this.state.categoriesList ? (
      <select onChange={this.handleSelectCat}>{renderCategoriesOption}</select>
    ) : (
      <div>false</div>
    )

    const isAnimeList = this.state.animeInfoBool ? (
      this.state.animeInfo.map(function anonymous(value, index) {
        console.log(`value[${index}] = `, value)
        return (
          <Link href={`/anime/AnimeInfo?id=${value.id}`} as={`/anime?id=${value.id}`} key={value.canonicalTitle}>
            
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

    // const renderAnimeList = this.state.animeInfo.map(function anonymous(value, index) {
    //   console.log(`value[${index}] = `, value);
    //   return (
    //     <div>{value.id}</div>
    //   )
    // })

    // const isAnimeList = this.state.categoriesID

    return (
      <Layout>
        <div>Categories Components</div>
        {renderCategoriesSelect}
        <div className="anime_card_container">{isAnimeList}</div>
        {/* {renderAnimeList} */}
      </Layout>
    )
  }
}

export default Categories
