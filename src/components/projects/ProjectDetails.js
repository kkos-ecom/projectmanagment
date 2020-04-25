import React from 'react'

export const ProjectDetails = (props) => {
   const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint quibusdam itaque rerum optio. Earum veritatis voluptatum, eveniet vero distinctio incidunt quis nesciunt, illo minus enim accusantium culpa minima corporis!</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Arenthus</div>
                        <div>2nd of Septmebder, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails