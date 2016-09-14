import React from 'react';
import ReactDOM from 'react-dom';
var BS = require('react-bootstrap');

import BigscreenPart from './src/BigscreenPart.jsx';
import DragChartModal from './src/DragChartModal.jsx';
import AddChartModal from './src/AddChartModal.jsx';



var chartNameList = [
    {title:"平均用户总量", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"},
    {title:"定制终端状态统计", url:"http://pic.97uimg.com/back_pic/00/04/20/33/f9fa39c44faaa2e630b7c4486cbc8b66.jpg!w1200"},
    {title:"设备类型分布", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"},
    {title:"全省设备排名", url:"http://pic.97uimg.com/back_pic/00/04/20/33/f9fa39c44faaa2e630b7c4486cbc8b66.jpg!w1200"},
    {title:"成功认证量", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"},
    {title:"NAS设备状态统计", url:"http://pic.97uimg.com/back_pic/00/04/20/33/f9fa39c44faaa2e630b7c4486cbc8b66.jpg!w1200"},
    {title:"awifi热点类型分布", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"},
    {title:"AP激活率统计", url:"http://pic.97uimg.com/back_pic/00/04/20/33/f9fa39c44faaa2e630b7c4486cbc8b66.jpg!w1200"}
];
for(var i=0; i<chartNameList.length; i++) {
    ReactDOM.render(
        <div style={{width:"100%",height:"100%"}}>
            {
                chartNameList.map(function (obj, i) {
                    return <DragChartModal key={i} title={obj.title} url={obj.url} style={{display:"inline-block"}} method="post" 
                        action="http://localhost:8081/ems-chinanet-bigscreen/ems/bigscreen_show/dataShowAction/areaspline_chart_data.action"/>
                })
            }

            <AddChartModal method="post" 
                action="http://localhost:8081/ems-chinanet-bigscreen/ems/bigscreen_show/dataShowAction/areaspline_chart_data.action" />
        </div>,
        document.getElementById('chartCnt'));
};

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
                return<BigscreenPart key={i} id={obj} />
            })
        }
    </div>,
    document.getElementById('screen'));
