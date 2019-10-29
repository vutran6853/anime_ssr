import React, { Component, useState } from 'react'

class Home extends Component {
  state = {}

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://kitsu.io/api/edge/anime')
      .then((response) => response.json())
      .then((response) => {
        // console.log('response=', response.data)
        // let result = []
        // response.data.map((value, index) => {
        //   // console.log(`value[${index}] =`, value.attributes);
        //   result.push(value.attributes)
        // })
        // this.setState({ animeListData: result })
      })

    // fetch('https://kitsu.io/api/edge/anime-productions')
    // .then((response) => response.json())
    // .then((response) => {
    //   console.log('response=', response.data)
    //   let animePriductionsIdArray = []
    //   response.data.map((value, index) => {
    //     // console.log(`value[${index}] =`, value.id);
    //     animePriductionsIdArray.push(value.id)
    //   })

    //   console.log({animePriductionsIdArray})
    //   for (let i = 0; i < animePriductionsIdArray.length; i++) {
    //     console.log(`animePriductionsIdArray${i}`, animePriductionsIdArray[i]);
    //     fetch(`https://kitsu.io/api/edge/anime-productions/${animePriductionsIdArray[i]}`)
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log('response=', response.data)
    //     })

    //   }
    //   // this.setState({ animeListData: result })
    // })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return <div>Home Components</div>
  }
}

// function Home(props) {
//   console.log('object')

//   const [text, useText] = useState({
//     id: 1,
//     text: 'Hello World'
//   })

//   console.log({text});
//   return <div>Home Components{text.text}</div>
// }
export default Home
