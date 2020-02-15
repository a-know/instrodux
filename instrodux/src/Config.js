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
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                            <h4 class="modal-title bold">Background Options</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="FullnameForm">Fullname</label>
                                            <FormName />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="CompanyForm">Company</label>
                                            <input type="text" class="form-control" id="CompanyForm" placeholder="Enter Company" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                  <label for="MesageForm">Message</label>
                                  <textarea class="form-control" rows="8" id="MesageForm" placeholder="Enter Message"></textarea>
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

class FormName extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        this.props.dispatch(
            {
                type: 'EDIT',
                name: e.target.value,
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

export default Config;
