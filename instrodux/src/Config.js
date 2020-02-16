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
                avatar: e.target.avatar,
                name: this.props.name,
                title: this.props.title,
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

export default Config;
