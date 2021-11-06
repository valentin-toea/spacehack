import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const PieGraph = () => {
    const colors = ["#896cde", "#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#8cc953", "#a9d154"];
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
        <PieChart width={530} height={250}>
            <Pie data={data} dataKey="points" nameKey="day" cx="50%" cy="50%" innerRadius={45} outerRadius={80} label>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                }
            </Pie>
            <Legend verticalAlign="middle" align="right" layout='vertical' />

        </PieChart>
    );
}

export default PieGraph;