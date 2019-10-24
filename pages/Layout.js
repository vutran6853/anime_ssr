import Navbar from '../components/navbar/Navbar'

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
