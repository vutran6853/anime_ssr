import Layout from './Layout'

class Categories extends React.Component {
  state = {
    categoriesList: null
  }

  componentDidMount() {
    console.log('componentDidMount Cat')
    fetch('https://kitsu.io/api/edge/categories')
      .then((response) => response.json())
      .then((response) => {
        console.log('response=', response.data)
        let result = []
        response.data.map((value, index) => {
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
    console.log('payload =', e.target.value)
  }

  render() {
    console.log(this.state)

    const renderCategoriesOption = this.state.categoriesList
      ? this.state.categoriesList.map((value, index) => {
          return <option value={value.title}>{value.title}</option>
        })
      : ''

    const renderCategoriesSelect = this.state.categoriesList ? (
      <select onChange={this.handleSelectCat}>{renderCategoriesOption}</select>
    ) : (
      <div>false</div>
    )

    return (
      <Layout>
        <div>Categories Components</div>
        {renderCategoriesSelect}
      </Layout>
    )
  }
}

export default Categories
