// import React, { Component, Fragment } from 'react'
// import fetchGenresInfo from '../../components/animes/GenresInfo'
import './genresInfo.scss'
import Link from 'next/link'
import Navbar from '../../components/navbar/Navbar'

class GenresInfo extends React.Component {
  state = {
    genresInfoData: {},
    genresInfoImageData: []
  }

  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/anime/${this.props.url.query.id}`)
      .then((response) => response.json())
      .then((response) => {
        // console.log('response=', response.data.attributes)
        this.setState({
          genresInfoData: response.data.attributes,
          genresInfoImageData: response.data.attributes.posterImage
        })
      })
      .catch((err) => console.error('Danger unable to fetch at GenresInfo' + err))
  }

  render() {
    console.log(this.state)

    const renderGenresInfo = this.state.genresInfoData ? (
      <div className="genresInfo_card_item">
        <h3>{this.state.genresInfoData.canonicalTitle}</h3>
        <img src={this.state.genresInfoImageData.medium} alt={this.state.genresInfoData.canonicalTitle} />
        <p>
          <strong>Desc: </strong> {this.state.genresInfoData.synopsis}
        </p>
        <span className="genresInfo_card_rate_info">
          <p>
            <strong>ageRating:</strong> {this.state.genresInfoData.ageRating}
          </p>
          <p>
            <strong>ageRatingGuide:</strong> {this.state.genresInfoData.ageRatingGuide}
          </p>
        </span>
        <p>
          <strong>episodeLength:</strong> {this.state.genresInfoData.episodeLength}
        </p>
        <p>
          <strong>popularityRank:</strong> {this.state.genresInfoData.popularityRank}
        </p>
        <p>
          <strong>Release Date:</strong> {this.state.genresInfoData.startDate}
        </p>
      </div>
    ) : (
      <div>False</div>
    )

    return (
      <div>
        <Navbar />
        <div className="GenresInfo_card_container">
          {renderGenresInfo}
          <Link href="/genres">
            <button>Home</button>
          </Link>
        </div>
      </div>
    )
  }
}

// const GenresInfo = async (props) => {
//   console.log('enter GenresInfo 4', props.url.query)
//   // const value = fetchGenresInfo(props.url.query.id)
//   const fetchGenresInfo = async function(id) {
//     // let result = {}
//    await fetch(`https://kitsu.io/api/edge/anime/${props.url.query.id}`)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log('response=', response.data.attributes)
//         return response.data.attributes
//       })
//       .catch((err) => console.error('Danger unable to fetch at fetchGenresInfo()' + err))

//     // return result
//   }

//   const value = await fetchGenresInfo()

//   console.log(value)

//   return (
//     <div>
//       <p>GenresInfo Component</p>
//       {/* <p>{fetchGenresInfo().ageRating}</p> */}
//       {/* <p>{fetchGenresInfo().createdAt}</p> */}
//     </div>
//   )
// }

export default GenresInfo
