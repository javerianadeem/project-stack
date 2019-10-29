import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="ul">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink onClick={props.signOut} to="/signin">Log out</NavLink></li>
      <li>
        <NavLink to="/" className="btn btn-floating #fafafa grey lighten-5 black-text">{props.profile.initials}</NavLink>
      </li>
    </ul>
  )
}
// if I add parentheses to signout on line 10 it will automatically call the function when it loads
//coming from "a" tag going to auth actions and then auth reducer

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

// passing null as first argument because first param is mapStateToProps
export default connect(null, mapDispatchToProps)(SignedInLinks)