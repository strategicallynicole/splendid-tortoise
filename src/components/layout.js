
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import "assets/scss/layout.scss"
import FavIcon from "assets/images/favicon.png"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>{`Lorem Ipsum Delorum`}</title>
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          href='https://fonts.googleapis.com/css2?family=Cabin&family=Titillium+Web&family=Homenaje&display=swap' rel='stylesheet'
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      
      {children}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
