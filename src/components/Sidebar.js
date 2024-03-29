import React, { Fragment } from 'react'
import {VscHome} from 'react-icons/vsc'
import {BsCode} from 'react-icons/bs'
import {MdOutlineDashboard, MdOutlineContactPage, MdEmail} from 'react-icons/md'
import {AiFillLinkedin,AiOutlineFileText, AiFillGithub, AiOutlineUnorderedList} from 'react-icons/ai'
import {Link, NavLink} from "react-router-dom";

function Sidebar() {

    const onClickEvent = () => { 
        window.open('https://drive.google.com/file/d/1PpFx3NeW3M8vPW7JFfJLAagv3oNPODL7/view?usp=sharing')
    }

  return (
    <Fragment>
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <br/>
                <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline ff-jost fw-600">Abhishek Kapopara</span>
                </Link>
                <br/>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <NavLink to="/abhishek-portfolio" className="nav-link align-middle px-0 text-white">
                            <VscHome className='fs-5'/> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                            <BsCode className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Skills</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mywork" className="nav-link align-middle px-0 text-white">
                            <MdOutlineDashboard className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">My Work</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/experience" className="nav-link align-middle px-0 text-white">
                            <AiOutlineUnorderedList className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Experience</span>
                        </NavLink>
                    </li>
                    <li style={{cursor:"pointer"}} onClick={onClickEvent} className="nav-item">
                        <div className="nav-link align-middle px-0 text-white">
                            <AiOutlineFileText color='white' className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Resume</span>
                        </div>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown pb-4 dropup">
                    <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <MdOutlineContactPage className='fs-5'/>
                        <span className="d-none d-sm-inline mx-1">Contact</span>
                    </a>
                    <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item text-black" href="mailto:abhishekkapopara1202@email.com" target="/blank"><MdEmail className='fs-5'/> Email</a></li>
                        <li> <hr className="dropdown-divider"/> </li>
                        <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/abhishek-kapopara-397527197/" target="/blank"><AiFillLinkedin className='fs-5'/> LinkedIn</a></li>
                        <li> <hr className="dropdown-divider"/> </li>
                        <li style={{cursor: 'pointer'}}><a className="dropdown-item text-black" href><AiFillGithub className='fs-5'/> Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Sidebar


