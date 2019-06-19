import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return(
    <div>
      <h1><Link to="/">MozGuj</Link></h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>  
          </li>
          <li>
            <Link to="/">Events</Link> 
          </li>
          <li>
            <Link to="/">Blog</Link>  
          </li>
          <li>
            <Link to="/">Contact</Link>  
          </li>
          <li>
            <Link to="/">About Us</Link>  
          </li> 
        </ul>
      </nav>
    </div>
  )
}

export default Header
