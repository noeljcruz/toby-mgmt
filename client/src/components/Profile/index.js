import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Profile = (props) => (
    <div className = "individuals-subcontainer">

        <img className="avatar" src="../../../images/avatar.png" alt="avatar"></img>
       
        <h3 className="prop-name">{props.firstName}{props.middleName}{props.lastName}</h3>
        <Link to={`/employees/`} onClick={props.handleLinkClick} id={props.id}><h3 className="prop-name" id={props.id}>{props.name}</h3></Link> 
        <h3 className="prop-title">{props.title}</h3>
    </div>
)

export default Profile;