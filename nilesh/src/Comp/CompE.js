import React, { useContext} from 'react'; //import userContest
import {UserContext, JobContext} from '../App' //import user and job context
function CompE() {
    const user = useContext(UserContext) //call the useContextfun and pass in context has its argument
    const channel = useContext(JobContext)

    return(
        <div>
            {user} - {channel} 
        </div>
    )
} 
export default CompE;