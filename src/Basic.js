import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
    return state;
}

class Basic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="portrait">
              <div class="bg-line"></div>
              <div class="body-portrait">
                <div class="box-note">
                  <div id="slider-note">
                    <div class="carousel-inner">
                        <InputBubble />
                    </div>
                  </div>
                </div>
                <div class="portrait-img-area">
                  <InputAvatar />
                  <div class="profile-links">
                  </div>
                </div>
                <h1 class="name"><InputName /><small><InputTitle /></small></h1>
                <div class="deviter"></div>
                <InputMessage />
              </div>
            </div>
        );
    }
}

Basic = connect()(Basic);

class InputBubble extends Component {
    render() {
        return (
            <div class="item active" style={{whiteSpace: 'pre-line'}}>{this.props.bubble}</div>
        );
    }
}

InputBubble = connect(mappingState)(InputBubble);

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

class InputMessage extends Component {
    render() {
        return (
            <h5 style={{whiteSpace: 'pre-line'}}>{this.props.message}</h5>
        );
    }
}

InputMessage = connect(mappingState)(InputMessage);

export default Basic;
