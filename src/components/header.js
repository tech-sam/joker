import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Fade from "react-reveal/Fade"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      //  background: `black`,
      marginBottom: `1.45rem`,
      backgroundColor: `#000000`,
      backgroundImage: `linear-gradient(315deg, #000000 0%, #414141 74%)`,
      // background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
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
            width: `430px`,
            textAlign: `center`,
            marginRight: `100px`,
            wordSpacing: `normal`,
            color: `white`,
            letterSpacing: `0`,
          }}
        >
          <h1>Heyo, I'm Sumit!</h1>
          <div>In love with programming since =~ 1325376732</div>

          <div>
            shouting <span style={{ fontStyle: `italic` }}>hello world!</span>{" "}
            in more than 5 languages.
          </div>
        </div>

        <div
          style={{
            width: `300px`,
            textAlign: `center`,
            margin: `10px`,
          }}
        >
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
