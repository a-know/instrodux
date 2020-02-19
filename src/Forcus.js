import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
    return state;
}

class Forcus extends Component {
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
                    <InputForcusLabel />
                    <div class="box-block">
                      <ul class="list-unstyled list-strip">
                        <InputForcusColumn1 />
                        <InputForcusColumn2 />
                        <InputForcusColumn3 />
                        <InputForcusColumn4 />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

Forcus = connect()(Forcus);

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

class InputForcusLabel extends Component {
    render() {
        return (
            <h3 class="title">{this.props.forcuslabel}</h3>
        );
    }
}

InputForcusLabel = connect(mappingState)(InputForcusLabel);

class InputForcusColumn1 extends Component {
    render() {
        return (
            <li><i class="fa fa-check"></i>{this.props.forcuscolumn1}</li>
        );
    }
}

InputForcusColumn1 = connect(mappingState)(InputForcusColumn1);

class InputForcusColumn2 extends Component {
    render() {
        return (
            <li><i class="fa fa-check"></i>{this.props.forcuscolumn2}</li>
        );
    }
}

InputForcusColumn2 = connect(mappingState)(InputForcusColumn2);

class InputForcusColumn3 extends Component {
    render() {
        return (
            <li><i class="fa fa-check"></i>{this.props.forcuscolumn3}</li>
        );
    }
}

InputForcusColumn3 = connect(mappingState)(InputForcusColumn3);

class InputForcusColumn4 extends Component {
    render() {
        return (
            <li><i class="fa fa-check"></i>{this.props.forcuscolumn4}</li>
        );
    }
}

InputForcusColumn4 = connect(mappingState)(InputForcusColumn4);

export default Forcus;
