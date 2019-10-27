import Navbar from '../components/navbar/Navbar'

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
