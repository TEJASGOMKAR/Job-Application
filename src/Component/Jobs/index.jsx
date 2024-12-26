import './index.css'
import Header from '../Header';
import Cookies from 'js-cookie';
import { useEffect,useState } from 'react';
import FilterSec from '../filterSec';
import DisplayAllJobs from '../displayAllJobs';

const Jobs =()=> {

    const token = Cookies.get("jwtToken");

    const [allValues, setValues] = useState({

         userList : [],

         userInput : "",

         emptyList : [],

         minPackage : "",

         salaryList : ""





    });

    useEffect(()=>{

        const fetchUserData = async()=>{

            // console.log(allValues.emptyList)
        
            const api =  `https://apis.ccbp.in/jobs?employment_type=${allValues.emptyList}&minimum_package=${allValues.minPackage , allValues.salaryList}&search=${allValues.userInput}`

            const options = {
                method : "Get",
                headers : {

                    Authorization :`Bearer ${token}`

                }
            }

            try {
                const response = await fetch(api,options);

                const data = await response.json();

                if( response.ok ===true ){
                    setValues({...allValues,userList : data.jobs})
                }
                
            } catch (error) {

                console.log(error);
                
            }

           

        }

        fetchUserData();
    },[allValues.userInput , allValues.emptyList , allValues.salaryList]);


    const onGetUserIn = (e)=>{

       

        if(e.key ==="Enter"){
            
            setValues({...allValues, userInput : e.target.value})
        }
        
    }
    const onChangeEmpList =(value, isChecked)=>{

        if( isChecked === true){

            setValues({...allValues , emptyList : [...allValues . emptyList,value]});


        }
        else{

        setValues({...allValues,emptyList : allValues.emptyList.filter(each => each !== value)});

        }

        
    } 

    const onChangeRangeList =(value)=>{

        setValues({...allValues, salaryList : value })

    }



    return(
        <>
        <Header/>
         <div className='jobs'>
        <div className='container'>

            <div className='row '>

                <div className='col-5 filter-cont'>
                    <FilterSec anonymousFunc={onChangeEmpList} synonymous={onChangeRangeList}/>
                </div>

                <div className='col-7 all-jobs-cont d-flex flex-column align-items-center'>

                    <input onKeyUp={onGetUserIn} type="search" placeholder='Search Your Jobs' className='mt-4 form-control w-75 border-secondary '  />
                <ul className=' p-4'>
                    {
                        allValues.userList.map( each => <DisplayAllJobs userDetails = {each} key ={each.id}/>)
                    }   
                </ul>
                </div>
                
            </div>
        </div>
        </div>
        </>
    )
}






export default Jobs;