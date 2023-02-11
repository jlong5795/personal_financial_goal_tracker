import { api } from "../utils/api";
import GoalCard from "../components/GoalCard";

const Goals = () => {
    const goals = api.goals.getAll.useQuery();

    // TODO: Remember to use local timezone when creating a goal so the date localizes correctly

    return (
        <div>
            <h1>Goals</h1>
            {goals?.data?.length === 0 && <p>No goals yet</p>}
            <ul>
                {goals?.data?.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </ul>
        </div>
    )
}

export default Goals;