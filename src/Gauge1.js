import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
    return state;
}

class Gauge1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="portrait">
              <div class="bg-line"></div>
                <div class="portrait-img-area">
                    <InputAvatar />
                </div>
                <h1 class="name"><InputName /><small><InputTitle /></small></h1>
                <div id='resume' class="tab-pane  fade in  active">
                  <div class="body-portrait">
                    <div class="row">
                      <div class="col-md-4">
                      <InputGaugeLabel />
                        <div class="box-block gauge-box">
                          <ul class="list-unstyled list-skills">
                            <li class="gaugelist">
                              <InputGaugeColumnLabel1 />
                              <InputGaugeColumnValue1 />
                            </li>
                            <li class="gaugelist">
                              <InputGaugeColumnLabel2 />
                              <InputGaugeColumnValue2 />
                            </li>
                            <li class="gaugelist">
                              <InputGaugeColumnLabel3 />
                              <InputGaugeColumnValue3 />
                            </li>
                            <li class="gaugelist">
                              <InputGaugeColumnLabel4 />
                              <InputGaugeColumnValue4 />
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

Gauge1 = connect()(Gauge1);

class InputAvatar extends Component {
    render() {
        return (
            <img src={this.props.avatar} alt="avatar" class="gauge-avatar" />
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

class InputGaugeLabel extends Component {
    render() {
        return (
            <h3 class="title gauge-title">{this.props.gaugelabel}</h3>
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
            <div class="progress">
            <div class="progress-bar" style={{width: this.props.gaugecolumnvalue1 + "%"}}>
              <span>{this.props.gaugecolumnvalue1}% </span>
            </div>
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
            <div class="progress">
            <div class="progress-bar" style={{width: this.props.gaugecolumnvalue2 + "%"}}>
              <span>{this.props.gaugecolumnvalue2}% </span>
            </div>
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
            <div class="progress">
            <div class="progress-bar" style={{width: this.props.gaugecolumnvalue3 + "%"}}>
              <span>{this.props.gaugecolumnvalue3}% </span>
            </div>
          </div>
        );
    }
}

InputGaugeColumnValue3 = connect(mappingState)(InputGaugeColumnValue3);

class InputGaugeColumnLabel4 extends Component {
    render() {
        return (
            <span class="caption-skill">{this.props.gaugecolumnlabel4}</span>
        );
    }
}

InputGaugeColumnLabel4 = connect(mappingState)(InputGaugeColumnLabel4);

class InputGaugeColumnValue4 extends Component {
    render() {
        return (
            <div class="progress">
            <div class="progress-bar" style={{width: this.props.gaugecolumnvalue4 + "%"}}>
              <span>{this.props.gaugecolumnvalue4}% </span>
            </div>
          </div>
        );
    }
}

InputGaugeColumnValue4 = connect(mappingState)(InputGaugeColumnValue4);

export default Gauge1;
