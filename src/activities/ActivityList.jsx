import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

//function added to try and erro r delete activity
export default function ActivityList({ activities, syncActivities }) {
 const { token } = useAuth();
   const [error, setError] = useState(null);
   const trydeleteActivity = async (token, id) => {
     setError(null);

       try {
         await deleteActivity(token, id);
         syncActivities();
       } catch (e) {
         setError(e.message);
       }
     };
  return (
  <div>
    <ul>
{/* added the onclick to call the delete activity function - tenerary condition applied */}
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}
      {token ? ( <button onClick={() => trydeleteActivity(token, activity.id)}>Delete Activity</button>) :null }
      </li>
      ))}
    </ul>
     {error && <p role="alert">{error}</p>}
    </div>
  );
}


