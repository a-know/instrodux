import React, { Component } from 'react';

class Config extends Component {
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
                                            <input type="text" class="form-control" id="FullnameForm" placeholder="Enter Fullname" />
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

export default Config;
