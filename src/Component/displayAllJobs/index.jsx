import './index.css';
import { FaStar,FaBriefcase } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
/* 
 {
      "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
      "title": "Devops Engineer",
      "rating": 4,
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
      "location": "Delhi",
      "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
      "employment_type": "Internship",
      "package_per_annum": "10 LPA"
    },
    {
      "id": "d6019453-f864-4a2f-8230-6a9642a59466",
      "title": "Backend Engineer",
      "rating": 4,
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
      "location": "Bangalore",
      "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
      "employment_type": "Full Time",
      "package_per_annum": "21 LPA"
    },



*/

const DisplayAllJobs = (props)=>{ 

      const {userDetails} = props;


  

    return(

      <Link  style={{ color : 'black' , textDecoration : "none"}}>
        <li className='jobs-card'>

        <div className='logo-title-rating-cont d-flex'>
          <img className='mr-3' src={userDetails.company_logo_url} width={"70px"} />
          <div>
            <h3>{userDetails.title}</h3>

            <span> <FaStar className='mr-3 text-warning'/>{userDetails.rating}</span>
          
            
          </div>
        </div>

        <div className='location-ppa-empType-cont mt-3 d-flex justify-content-between'>

          <div className='location-empType-cont'>
            <span className='mr-3'><FaLocationDot/>{userDetails.location}</span>

            <span><FaBriefcase className='mr-1'/>{userDetails.employment_type}</span>

          </div>

          <h5>{userDetails.package_per_annum}</h5>
        </div>

        <hr />

        <div>

          <h6>Discription</h6>

          <p>{userDetails.job_description}</p>
        </div>

        </li>
        </Link>
    )
}
export default DisplayAllJobs;