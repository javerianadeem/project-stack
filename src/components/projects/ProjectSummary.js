import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project }) => {

  return (
    <div className="z-depth-2 card blue-grey darken-1 project-summary">
      <div className="card-content white-text">
        <span className="card-title">{project.title}</span>
        {/* <h6>{project.content}</h6> */}
        <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary