
// import PropTypes from 'prop-types'

import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

Layout.propTypes = {}

export default Layout