import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
    return state;
}

class Business extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="portrait">
              <div class="bg-line"></div>
              <div class="body-portrait">
                <div class="portrait-img-area">
                  <InputAvatar />
                </div>
                <h1 class="name"><InputName /><small><InputTitle /></small></h1>
                
                <div class="row">
                  <div class="col-md-6">
                    <div class="identity-area">
                      <div class="row">
                        <InputColumnLabel1 />
                        <InputColumnValue1 />
                      </div>
                      <div class="row">
                        <InputColumnLabel2 />
                        <InputColumnValue2 />
                      </div>
                      <div class="row">
                        <InputColumnLabel3 />
                        <InputColumnValue3 />
                      </div>
                      <div class="row">
                        <InputColumnLabel4 />
                        <InputColumnValue4 />
                      </div>
                      <div class="row">
                        <InputColumnLabel5 />
                        <InputColumnValue5 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

Business = connect()(Business);

class InputAvatar extends Component {
    render() {
        return (
            <img src={this.props.avatar} alt="avatar" class="avatar" />
        );
    }
}

InputAvatar = connect(mappingState)(InputAvatar);

class InputName extends Component {
    render() {
        return (
            <p class="p-name">{this.props.name}</p>
        );
    }
}

InputName = connect(mappingState)(InputName);

class InputTitle extends Component {
    render() {
        return (
            <p>{this.props.title}</p>
        );
    }
}

InputTitle = connect(mappingState)(InputTitle);

class InputColumnLabel1 extends Component {
    render() {
        return (
            <div class="col-sm-4"><label>{this.props.columnlabel1}</label></div>
        );
    }
}

InputColumnLabel1 = connect(mappingState)(InputColumnLabel1);

class InputColumnValue1 extends Component {
    render() {
        return (
            <div class="col-sm-8">{this.props.columnvalue1}</div>
        );
    }
}

InputColumnValue1 = connect(mappingState)(InputColumnValue1);

class InputColumnLabel2 extends Component {
    render() {
        return (
            <div class="col-sm-4"><label>{this.props.columnlabel2}</label></div>
        );
    }
}

InputColumnLabel2 = connect(mappingState)(InputColumnLabel2);

class InputColumnValue2 extends Component {
    render() {
        return (
            <div class="col-sm-8">{this.props.columnvalue2}</div>
        );
    }
}

InputColumnValue2 = connect(mappingState)(InputColumnValue2);

class InputColumnLabel3 extends Component {
    render() {
        return (
            <div class="col-sm-4"><label>{this.props.columnlabel3}</label></div>
        );
    }
}

InputColumnLabel3 = connect(mappingState)(InputColumnLabel3);

class InputColumnValue3 extends Component {
    render() {
        return (
            <div class="col-sm-8">{this.props.columnvalue3}</div>
        );
    }
}

InputColumnValue3 = connect(mappingState)(InputColumnValue3);

class InputColumnLabel4 extends Component {
    render() {
        return (
            <div class="col-sm-4"><label>{this.props.columnlabel4}</label></div>
        );
    }
}

InputColumnLabel4 = connect(mappingState)(InputColumnLabel4);

class InputColumnValue4 extends Component {
    render() {
        return (
            <div class="col-sm-8">{this.props.columnvalue4}</div>
        );
    }
}

InputColumnValue4 = connect(mappingState)(InputColumnValue4);

class InputColumnLabel5 extends Component {
    render() {
        return (
            <div class="col-sm-4"><label>{this.props.columnlabel5}</label></div>
        );
    }
}

InputColumnLabel5 = connect(mappingState)(InputColumnLabel5);

class InputColumnValue5 extends Component {
    render() {
        return (
            <div class="col-sm-8">{this.props.columnvalue5}</div>
        );
    }
}

InputColumnValue5 = connect(mappingState)(InputColumnValue5);

export default Business;
