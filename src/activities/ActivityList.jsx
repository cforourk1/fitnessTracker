import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";


export default function ActivityList({ activities, syncActivities }) {
 const { token } = useAuth();
  return (
    <ul>
      {activities.map((activity.id) => (
        <li key={activity.id}>{activity.name}
      {token ? ( <button onClick={() => deleteActivity("activities")}>Delete Activity</button>) :null }
      </li>
      ))}
    </ul>
  );
}


