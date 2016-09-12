import React from 'react';
import ReactDOM from 'react-dom';
var BS = require('react-bootstrap');

import App from './js/App.jsx';
import Yhzl from './js/Yhzl.jsx';

var chartNameList = [
    {title:"line_YHRZ", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"},
    {title:"funnel_SBPM", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"}
];

for(var i=0; i<chartNameList.length; i++) {
    ReactDOM.render(
        <div>
            {
                chartNameList.map(function (name) {
                    return <Yhzl title={name.title} url={name.url} />
                })
            }


            <div><Yhzl title="新增" src="http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"/></div>
        </div>,
        document.getElementById('chartCnt'));
}


