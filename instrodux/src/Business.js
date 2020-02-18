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
                        <div class="col-sm-4"><label>住所</label></div>
                        <div class="col-sm-8"> 東京都港区南青山</div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4"><label>TEL</label></div>
                        <div class="col-sm-8"> 0120-444-444</div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4"><label>Email</label></div>
                        <div class="col-sm-8"> a-know@example.com</div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4"><label>Website</label></div>
                        <div class="col-sm-8"> https://home.a-know.me/</div>
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
            <p>{this.props.name}</p>
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

export default Business;
