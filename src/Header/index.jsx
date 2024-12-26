import'./index.css';

const Navigation = (props)=>{

    const { userDetails } = props;

    const { name, email, gender, status} = userDetails;

    return(
        <li style={{border : "1px solid black", padding : "20px", margin :"30px", listStyle:"none", width :"600px"}}>

            <h1>{name}</h1>

            <h2>{email}</h2>

            <h3>{gender}</h3>

            <h4>{status}</h4>
        </li>
    )


 

}
  
  

export default Navigation;