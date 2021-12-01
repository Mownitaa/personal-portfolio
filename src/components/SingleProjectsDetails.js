import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { projects } from '../data/projectDatat';

const SingleProjectsDetails = () => {
    // const [project, setProject] = useState([]);

    const { projectId } = useParams();
    console.log(projectId)
    console.log(projects)
    // useEffect(() => {
    //     fetch(`${projects}`)
    //         .then(res => res.json())
    //         // .then(data => console.log(data));
    //         .then(data => setProject(data[`${projectId - 1}`]));
    // }, [projectId])


    return (
        <>
            {/* <div className="container pt-5">
        <div>
            <h1>Our Services</h1>
            <p className="text-info">________________________________</p>

        </div>
        <div className="d-flex mb-5 pb-5 row row-cols-1 row-cols-md-3 g-4 ">
            {
                projects.map(singleProjectDetail => <SingleProjectDetail
                    key={singleProjectDetail.id}
                    singleProjectDetail={singleProjectDetail}></SingleProjectDetail>)
            }
        </div>

    </div>
 */}





            <div className="container p-5">
                <h2 className="text-danger pb-3">"Service ID: {projectId}"</h2>
                <div className="border border-3 border-warning py-5">
                    <img src={projects.img} alt="" />
                    <h4 className="pt-5 text-primary">Service : {projects.name}</h4>
                    <p>{projects.description}</p>
                    <button className="p-3 mt-3 border-danger rounded bg-white fs-6"> <NavLink className="text-decoration-none" to="/">Back To ports</NavLink>
                    </button>
                </div>
            </div>

        </>
    );
};

export default SingleProjectsDetails;