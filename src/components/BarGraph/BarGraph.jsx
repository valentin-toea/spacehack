
import { Bar, CartesianGrid, Legend, XAxis, YAxis, BarChart, Tooltip } from "recharts";
import {colors} from '../../config/config';

const BarGraph = () => {
    const data = [
        {
            day: "Monday",
            points: 67
        },

        {
            day: "Tuesday",
            points: 53,
        },

        {
            day: "Wednesday",
            points: 30,
        },

        {
            day: "Thursday",
            points: 59
        },
        {
            day: "Friday",
            points: 72,
        },
        {
            day: "Saturday",
            points: 78,
        },

        {
            day: "Sunday",
            points: 84
        }
    ];
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar maxBarSize={30} dataKey="points" fill={colors.marine} />
        </BarChart>
    );
}

export default BarGraph;