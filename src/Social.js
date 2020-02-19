import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from "qrcode.react"

function mappingState(state) {
    return state;
}

class Social extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="portrait">
              <div class="bg-line"></div>
              <div id='contact' class="body-portrait">
                <div class="portrait-img-area">
                  <InputAvatar />
                </div>
                <h1 class="name"><InputName /><small><InputTitle /></small></h1>
                <div class="info-map">
                  <InputSocialLabel />
                  <ul class="list-unstyled list-info">
                    <InputQR />
                    <InputSocialLink />
                  </ul>
                </div>
              </div>
            </div>
        );
    }
}

Social = connect()(Social);

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

class InputSocialLabel extends Component {
    render() {
        return (
            <h2>{this.props.sociallabel}</h2>
        );
    }
}

InputSocialLabel = connect(mappingState)(InputSocialLabel);

class InputQR extends Component {
    render() {
        return (
            <li><QRCode value={this.props.sociallink} /></li>
        );
    }
}

InputQR = connect(mappingState)(InputQR);

class InputSocialLink extends Component {
    render() {
        return (
            <li><i class="fa fa-link"></i> <a href={this.props.sociallink}>{this.props.sociallink}</a></li>
        );
    }
}

InputSocialLink = connect(mappingState)(InputSocialLink);

export default Social;
