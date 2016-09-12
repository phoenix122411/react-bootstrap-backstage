import React from 'react';

class Yhzl extends React.Component {
   render() {
      return (
          <div>
             <div id="yhzl" style={{ width: '142px', height: '111px', background: '#aaa'}}>
                <img src={this.props.url} />
             </div>
             <div>
                <h3 >{this.props.title}</h3>
                <i className="icon fa fa-user"></i>
                <i></i>
             </div>
          </div>

      );
   }
}

export default Yhzl;