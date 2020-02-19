import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
    return state;
}

class Gauge2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div class="content">
              <div class="bg-line"></div>
                <div class="portrait-img-area gage-portrait-img-area">
                    <InputAvatar />
                </div>
                <h1 class="name gage-name"><InputName /><small class="gage-name-small"><InputTitle /></small></h1>
                <div id='resume' class="tab-pane  fade in  active">
                  <div class="body-portrait">
                    <div class="row">
                      <div class="col-md-4">
                        <InputGaugeLabel />
                        <div class="box-block gage2-block">
                          <ul class="list-unstyled list-points-progress">
                            <li>
                              <InputGaugeColumnLabel1 />
                              <InputGaugeColumnValue1 />
                            </li>
                            <li>
                              <InputGaugeColumnLabel2 />
                              <InputGaugeColumnValue2 />
                            </li>
                            <li>
                              <InputGaugeColumnLabel3 />
                              <InputGaugeColumnValue3 />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
        );
    }
}

Gauge2 = connect()(Gauge2);

class InputAvatar extends Component {
    render() {
        return (
            <img src={this.props.avatar} alt="avatar" class="avatar gage-avatar" />
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

class InputGaugeLabel extends Component {
    render() {
        return (
            <h3 class="title with-icon">{this.props.gaugelabel}</h3>
        );
    }
}

InputGaugeLabel = connect(mappingState)(InputGaugeLabel);

class InputGaugeColumnLabel1 extends Component {
    render() {
        return (
            <span class="caption-skill">{this.props.gaugecolumnlabel1}</span>
        );
    }
}

InputGaugeColumnLabel1 = connect(mappingState)(InputGaugeColumnLabel1);

class InputGaugeColumnValue1 extends Component {
    render() {
        return (
            <div class="pogress-point">
                <span class="point-indicator">{this.props.gaugecolumnvalue1}%</span>
                <div class="progress-bar-point" style={{width: this.props.gaugecolumnvalue1 + "%"}}></div>
            </div>
        );
    }
}

InputGaugeColumnValue1 = connect(mappingState)(InputGaugeColumnValue1);

class InputGaugeColumnLabel2 extends Component {
    render() {
        return (
            <span class="caption-skill">{this.props.gaugecolumnlabel2}</span>
        );
    }
}

InputGaugeColumnLabel2 = connect(mappingState)(InputGaugeColumnLabel2);

class InputGaugeColumnValue2 extends Component {
    render() {
        return (
            <div class="pogress-point">
                <span class="point-indicator">{this.props.gaugecolumnvalue2}%</span>
                <div class="progress-bar-point" style={{width: this.props.gaugecolumnvalue2 + "%"}}></div>
            </div>
        );
    }
}

InputGaugeColumnValue2 = connect(mappingState)(InputGaugeColumnValue2);

class InputGaugeColumnLabel3 extends Component {
    render() {
        return (
            <span class="caption-skill">{this.props.gaugecolumnlabel3}</span>
        );
    }
}

InputGaugeColumnLabel3 = connect(mappingState)(InputGaugeColumnLabel3);

class InputGaugeColumnValue3 extends Component {
    render() {
        return (
            <div class="pogress-point">
                <span class="point-indicator">{this.props.gaugecolumnvalue3}%</span>
                <div class="progress-bar-point" style={{width: this.props.gaugecolumnvalue3 + "%"}}></div>
            </div>
        );
    }
}

InputGaugeColumnValue3 = connect(mappingState)(InputGaugeColumnValue3);

export default Gauge2;
