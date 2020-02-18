import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
    return state;
}

class Config extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <FormBubble />
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <FormName />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <FormTitle />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <FormAvatar />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <FormMessage />
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <FormColumnLabel1 />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <FormColumnValue1 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <FormColumnLabel2 />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <FormColumnValue2 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <FormColumnLabel3 />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <FormColumnValue3 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <FormColumnLabel4 />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <FormColumnValue4 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <FormColumnLabel5 />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <FormColumnValue5 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <FormForcusLabel />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <FormForcusColumn1 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <FormForcusColumn2 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <FormForcusColumn3 />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <FormForcusColumn4 />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Config = connect()(Config);

class FormBubble extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: e.target.value,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <textarea class="form-control" rows="2" id="MesageForm" value={this.props.bubble} onChange={this.doChange} ></textarea>
        )
    }
}

FormBubble = connect(mappingState)(FormBubble);

class FormAvatar extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: e.target.value,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.avatar} onChange={this.doChange} />
        )
    }
}

FormAvatar = connect(mappingState)(FormAvatar);

class FormName extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: e.target.value,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.name} onChange={this.doChange} />
        )
    }
}

FormName = connect(mappingState)(FormName);

class FormTitle extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: e.target.value,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="CompanyForm" value={this.props.title} onChange={this.doChange} />
        )
    }
}

FormTitle = connect(mappingState)(FormTitle);

class FormMessage extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: e.target.value,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <textarea class="form-control" rows="2" id="MesageForm" value={this.props.message} onChange={this.doChange} ></textarea>
        )
    }
}

FormMessage = connect(mappingState)(FormMessage);

class FormColumnLabel1 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: e.target.value,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnlabel1} onChange={this.doChange} />
        )
    }
}

FormColumnLabel1 = connect(mappingState)(FormColumnLabel1);

class FormColumnValue1 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: e.target.value,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnvalue1} onChange={this.doChange} />
        )
    }
}

FormColumnValue1 = connect(mappingState)(FormColumnValue1);

class FormColumnLabel2 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: e.target.value,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnlabel2} onChange={this.doChange} />
        )
    }
}

FormColumnLabel2 = connect(mappingState)(FormColumnLabel2);

class FormColumnValue2 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: e.target.value,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnvalue2} onChange={this.doChange} />
        )
    }
}

FormColumnValue2 = connect(mappingState)(FormColumnValue2);

class FormColumnLabel3 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: e.target.value,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnlabel3} onChange={this.doChange} />
        )
    }
}

FormColumnLabel3 = connect(mappingState)(FormColumnLabel3);

class FormColumnValue3 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: e.target.value,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnvalue3} onChange={this.doChange} />
        )
    }
}

FormColumnValue3 = connect(mappingState)(FormColumnValue3);

class FormColumnLabel4 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: e.target.value,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnlabel4} onChange={this.doChange} />
        )
    }
}

FormColumnLabel4 = connect(mappingState)(FormColumnLabel4);

class FormColumnValue4 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: e.target.value,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnvalue4} onChange={this.doChange} />
        )
    }
}

FormColumnValue4 = connect(mappingState)(FormColumnValue4);

class FormColumnLabel5 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: e.target.value,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnlabel5} onChange={this.doChange} />
        )
    }
}

FormColumnLabel5 = connect(mappingState)(FormColumnLabel5);

class FormColumnValue5 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: e.target.value,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.columnvalue5} onChange={this.doChange} />
        )
    }
}

FormColumnValue5 = connect(mappingState)(FormColumnValue5);

class FormForcusLabel extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: e.target.value,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.forcuslabel} onChange={this.doChange} />
        )
    }
}

FormForcusLabel = connect(mappingState)(FormForcusLabel);

class FormForcusColumn1 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: e.target.value,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.forcuscolumn1} onChange={this.doChange} />
        )
    }
}

FormForcusColumn1 = connect(mappingState)(FormForcusColumn1);

class FormForcusColumn2 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: e.target.value,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.forcuscolumn2} onChange={this.doChange} />
        )
    }
}

FormForcusColumn2 = connect(mappingState)(FormForcusColumn2);

class FormForcusColumn3 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: e.target.value,
                forcuscolumn4: this.props.forcuscolumn4,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.forcuscolumn3} onChange={this.doChange} />
        )
    }
}

FormForcusColumn3 = connect(mappingState)(FormForcusColumn3);

class FormForcusColumn4 extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                bubble: this.props.bubble,
                avatar: this.props.avatar,
                name: this.props.name,
                title: this.props.title,
                message: this.props.message,
                columnlabel1: this.props.columnlabel1,
                columnvalue1: this.props.columnvalue1,
                columnlabel2: this.props.columnlabel2,
                columnvalue2: this.props.columnvalue2,
                columnlabel3: this.props.columnlabel3,
                columnvalue3: this.props.columnvalue3,
                columnlabel4: this.props.columnlabel4,
                columnvalue4: this.props.columnvalue4,
                columnlabel5: this.props.columnlabel5,
                columnvalue5: this.props.columnvalue5,
                forcuslabel: this.props.forcuslabel,
                forcuscolumn1: this.props.forcuscolumn1,
                forcuscolumn2: this.props.forcuscolumn2,
                forcuscolumn3: this.props.forcuscolumn3,
                forcuscolumn4: e.target.value,
            }
        );
    }

    render() {
        return (
            <input type="text" class="form-control" id="FullnameForm" value={this.props.forcuscolumn4} onChange={this.doChange} />
        )
    }
}

FormForcusColumn4 = connect(mappingState)(FormForcusColumn4);

export default Config;
