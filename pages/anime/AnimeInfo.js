// import React, { Component, Fragment } from 'react'
// import fetchAnimeInfo from '../../components/animes/AnimeInfo'
import './animeInfo.scss'
import Link from 'next/link'

class AnimeInfo extends React.Component {
  state = {
    animeInfoData: {},
    animeInfoImageData: []
  }

  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/anime/${this.props.url.query.id}`)
      .then((response) => response.json())
      .then((response) => {
        // console.log('response=', response.data.attributes)
        this.setState({
          animeInfoData: response.data.attributes,
          animeInfoImageData: response.data.attributes.posterImage
        })
      })
      .catch((err) => console.error('Danger unable to fetch at AnimeInfo' + err))
  }

  render() {
    console.log(this.state)

    const renderAnimeInfo = this.state.animeInfoData ? (
      <div className="animeInfo_card_item">
        <h3>{this.state.animeInfoData.canonicalTitle}</h3>
        <img src={this.state.animeInfoImageData.medium} alt={this.state.animeInfoData.canonicalTitle} />
        <p>
          {' '}
          <strong>Desc: </strong> {this.state.animeInfoData.synopsis}
        </p>
        <span className="animeInfo_card_rate_info">
          <p>
            <strong>ageRating:</strong> {this.state.animeInfoData.ageRating}
          </p>
          <p>
            <strong>ageRatingGuide:</strong> {this.state.animeInfoData.ageRatingGuide}
          </p>
        </span>
        <p>
          <strong>episodeLength:</strong> {this.state.animeInfoData.episodeLength}
        </p>
        <p>
          <strong>popularityRank:</strong> {this.state.animeInfoData.popularityRank}
        </p>
        <p>
          <strong>Release Date:</strong> {this.state.animeInfoData.startDate}
        </p>
      </div>
    ) : (
      <div>False</div>
    )

    return (
      <div className="animeInfo_card_container">
        {renderAnimeInfo}
        <Link href="">
          <button>Home</button>
        </Link>
      </div>
    )
  }
}

// const AnimeInfo = async (props) => {
//   console.log('enter AnimeInfo 4', props.url.query)
//   // const value = fetchAnimeInfo(props.url.query.id)
//   const fetchAnimeInfo = async function(id) {
//     // let result = {}
//    await fetch(`https://kitsu.io/api/edge/anime/${props.url.query.id}`)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log('response=', response.data.attributes)
//         return response.data.attributes
//       })
//       .catch((err) => console.error('Danger unable to fetch at fetchAnimeInfo()' + err))

//     // return result
//   }

//   const value = await fetchAnimeInfo()

//   console.log(value)

//   return (
//     <div>
//       <p>AnimeInfo Component</p>
//       {/* <p>{fetchAnimeInfo().ageRating}</p> */}
//       {/* <p>{fetchAnimeInfo().createdAt}</p> */}
//     </div>
//   )
// }

export default AnimeInfo
