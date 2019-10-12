import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Fade from "react-reveal/Fade"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        height: 500,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}

      <div
        style={{
          display: `flex`,
          flexDirection: `row-reverse`,
          marginTop: `75px`,
        }}
      >
        <div style={{ width: `300px` }}>
          <Image />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  showFade: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  showFade: true,
}

export default Header
