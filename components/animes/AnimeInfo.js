const animeSingleInfo = (id) => {
  let result = {}
  fetch(`https://kitsu.io/api/edge/anime/${id}`)
    .then((response) => response.json())
    .then((response) => {
      // console.log('response=', response.data.attributes)
      result = response.data.attributes
    })
    .catch((err) => console.error('Danger unable to fetch at animeSingleInfo()' + err))

  return result
}

export default animeSingleInfo
