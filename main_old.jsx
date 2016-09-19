import React from 'react';
import ReactDOM from 'react-dom';
var BS = require('react-bootstrap');

import BigscreenPart from './src/BigscreenPart.jsx';
import DragChartModal from './src/DragChartModal.jsx';
import AddChartModal from './src/AddChartModal.jsx';

if(typeof(chartList) != 'undefined') {
    for(var i=0; i<chartList.length; i++) {
        ReactDOM.render(
            <div style={{width:"100%",height:"100%"}}>
                {
                    chartList.map(function (obj, i) {
                        return <DragChartModal key={i} title={obj.name} url={obj.icon} style={{display:"inline-block"}} 
                            method="post" action="http://localhost:8081/ems-chinanet-bigscreen/ems/bigscreen_show/dataShowAction/areaspline_chart_data.action"/>
                    })
                }

                <AddChartModal method="post" 
                    action="http://localhost:8081/ems-chinanet-bigscreen/ems/bigscreen_show/dataShowAction/areaspline_chart_data.action" />
            </div>,
            document.getElementById('chartCnt'));
    };
}

const partIds=[
    "part_1_1", "part_1_2", "part_1_3","part_1_4","part_1_5",
    "part_2_1", "part_2_2", "part_2_3","part_2_4","part_2_5",
    "part_3_1", "part_3_2", "part_3_3","part_3_4","part_3_5",
    "part_4_1", "part_4_2", "part_4_3","part_4_4","part_4_5"
];
ReactDOM.render(
    <div style={{width:"100%",height:"100%"}}>
        {
            partIds.map(function(obj, i) {
                return<BigscreenPart key={i} index={i} id={obj} />
            })
        }
    </div>,
    document.getElementById('screen'));
