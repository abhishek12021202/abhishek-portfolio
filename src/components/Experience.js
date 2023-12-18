import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Experience() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Abhishek Pravinbhai Kapopara</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Software Developer Intern</h4>
                                <h6 className="blue-label px-2 py-1">June 2023 - Present</h6>
                                <p className="m-0">Copart Inc · Full-time</p>
                                <p>Dallas, Texas, USA</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">MERN Stack developer</h4>
                                <h6 className="blue-label px-2 py-1">August 2020 - July 2021</h6>
                                <p className="m-0">Tagline Infotech · Full-time</p>
                                <p>Surat, Gujarat, India</p>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Master - Computer Science</h4>
                                <h6 className="blue-label px-2 py-1">2021-2023</h6>
                                <p className="m-0">University of texas at Arlington</p>
                                <p>GPA: 3.75/4.0</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BE - Computer Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2016 - 2020</h6>
                                <p className="m-0">Gujarat Technological University</p>
                                <p>CGPA: 7.33/10</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Experience