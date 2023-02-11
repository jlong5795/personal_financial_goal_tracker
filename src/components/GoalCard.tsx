import { Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone);

const GoalCard = ({ goal }: { goal: RouterOutputs['goals']['getOne']}) => {
    const tz = dayjs.tz.guess()
    
    return (
        <li>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }}>{goal?.description}</Typography>
                    <Typography>{dayjs(goal?.targetDate).tz(tz).format("MM-DD-YYYY")}</Typography>
                    <Typography>${goal?.targetAmount}</Typography>
                </CardContent>
            </Card>
        </li>
    )
};

export default GoalCard;