
import { Card } from '@mantine/core';
import React, { useState } from 'react';
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts';

const RadialGraph = (props) => {
    const [data, setData] = useState(null);
    const whtv = [{name: 'a', likes: 12}, {name: 'b', likes: 15}];
    React.useEffect(() => {
        for (const key in props.data) {
            let val = {};
            if (key === props.selectedPlatform.toLowerCase()) {
                props.data[key].forEach((obj, index) => {
                    for (const objKey in obj) {
                        if (index === 0) val[objKey] = 0;
                        val[objKey] += obj[objKey];
                    }
                })
                setData([val])
            }
        }
    }, [props.data])

    return (<>
        <RadialBarChart
            width={730}
            height={250}
            data={data}
            startAngle={180}
            endAngle={0}
        >
            <RadialBar minAngle={15} dataKey='likes'/>
            <RadialBar minAngle={15} dataKey='comments'/>

            <Legend iconSize={10} width={120} height={140} />
            <Tooltip />
        </RadialBarChart>
        
    </>


    );
}

export default RadialGraph;