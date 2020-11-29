import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar.js"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header


    header = (
      <h1 className="main-heading">
        {title}
      </h1>
    )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Navbar title={header}>
          <Link to="/">Home</Link>
        </Navbar>
      </header>
      <main>{children}</main>
      <footer>
        <p>Copyright©SuhasWaydande.</p>
        <div className="SocialLinks">
          <a href="https://github.com/SuhasWaydande9" target="_blank"><p></p></a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
