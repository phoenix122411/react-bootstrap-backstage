import React from 'react';
import ReactDOM from 'react-dom';
var BS = require('react-bootstrap');

import App from './src/App.jsx';
import Yhzl from './src/Yhzl.jsx';
import LoadingButton from './src/LoadingButton.jsx';
import OverlayExample from './src/OverlayExample.jsx';
import PopupWindow from './src/PopupWindow.jsx';

var chartNameList = [
    {title:"line_YHRZ", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"},
    {title:"funnel_SBPM", url:"http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"}
];

for(var i=0; i<chartNameList.length; i++) {
    ReactDOM.render(
    <div>
        {
            chartNameList.map(function (object, i) {
                return <Yhzl key={i} title={object.title} url={object.url} />
            })
        }
        <div><Yhzl title="新增" src="http://pic2.97uimg.com/58pic/19/62/67/99I58PICpYn.jpg!w1200"/></div>
        
        <div className="well" style={{maxWidth: 400, margin: '0 auto 10px'}}>
            <BS.Button bsStyle="primary" bsSize="large" block>Block level button</BS.Button>
            <BS.Button bsSize="large" block>Block level button</BS.Button>
        </div>

        <BS.ButtonToolbar>
            <BS.Button bsStyle="primary" bsSize="large" active>Primary button</BS.Button>
            <BS.Button bsStyle="success">Success</BS.Button>
            <BS.Button bsStyle="info">Info</BS.Button>
            <BS.Button bsStyle="warning">Warning</BS.Button>
            <BS.Button bsStyle="danger">Danger</BS.Button>
            <BS.Button bsStyle="link">Link</BS.Button>
            <BS.Button bsSize="large" active>Button</BS.Button>
            <BS.Button bsSize="large" disabled>Button</BS.Button>
        </BS.ButtonToolbar>

        <BS.ButtonGroup>
            <BS.Button>Left</BS.Button>
            <BS.Button>Middle</BS.Button>
            <BS.Button>Right</BS.Button>
        </BS.ButtonGroup>

        <BS.ButtonGroup vertical block>
            <BS.Button>Full width button</BS.Button>
            <BS.Button>Full width button</BS.Button>
        </BS.ButtonGroup>
        
        <BS.ButtonGroup justified>
            <BS.Button href="#">Left</BS.Button>
            <BS.Button href="#">Middle</BS.Button>
            <BS.DropdownButton title="Dropdown" id="bg-justified-dropdown">
                <BS.MenuItem eventKey="1">Dropdown link</BS.MenuItem>
                <BS.MenuItem eventKey="2">Dropdown link</BS.MenuItem>
            </BS.DropdownButton>
        </BS.ButtonGroup>

        <LoadingButton />
        <OverlayExample />
        <PopupWindow />
    </div>,
    document.getElementById('chartCnt'));
}