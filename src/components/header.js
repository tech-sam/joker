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
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          alignItems: `center`,
          marginTop: `70px`,
          marginRight: `70px`,
        }}
      >
        <div
          style={{
            width: `400px`,
            textAlign: `center`,
            margin: `10px`,
            wordSpacing: `normal`,
            color: `white`,
            letterSpacing: `0`,
          }}
        >
          <h1>Heyo, I'm Sumit!</h1>
          <div className="subtext">
            this is test textsdfsdfsdfsfsfdfsdfthis is test
            textsdfsdfsdfsfsfdfsdfthis is test textsdfsdfsdfsfsfdfsdf
          </div>
          <div>this is test textsdfsdfsdfsfsfdfsdf</div>
          <div>this is test textsdfsdfsdfsfsfdfsdf</div>
          <div>this is test textsdfsdfsdfsfsfdfsdf</div>
        </div>

        <div style={{ width: `300px`, textAlign: `center`, margin: `10px` }}>
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
