import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'
import { SideNav, SideNavItem } from 'react-materialize'
// import { statement } from '@babel/template'

const Navbar = (props) => {
  const { auth, profile } = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <div>
      <nav className="nav-wrapper #455a64 blue-grey darken-2">
        <div className="container">
          <Link to="/" className="brand-logo">ProjectStack</Link>
          <span className="hide-on-small-only">{links}</span>
          <SideNav trigger={<a className="hide-on-med-and-up side-nav show-on-small"><i className="material-icons">menu</i></a>}
           options={{ closeOnClick: true }}>
            <SideNavItem>
                {links}
            </SideNavItem>
          </SideNav>
        </div>
      </nav>

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar)