import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header>
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
          <h1>Heyo, I'm Sumit !</h1>
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
