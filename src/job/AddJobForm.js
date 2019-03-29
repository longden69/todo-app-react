import React, {Component} from 'react';

class AddJobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddForm: false,
            jobName: '',
            priority: 1
        }

        this.handleClickShowForm = this.handleClickShowForm.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onClickAddJob = this.onClickAddJob.bind(this);
    }

    handleClickShowForm() {
        this.setState({
            showAddForm: !this.state.showAddForm
        })
    }

    onHandleChange(event) {
        const elm = event.target;
        const name = elm.name;
        this.setState({
            [name]: elm.value
        })
    }

    onClickAddJob() {
        const Job = {
            name: this.state.jobName,
            priority: this.state.priority
        };
        this.props.onSaveJob(Job);
    }

    render() {
        let formElm = null;

        formElm = () => {
            if (this.state.showAddForm) {
                return (
                    <div className="row">
                        <div className="col-md-12 content-add-form">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" value={this.state.jobName} name="jobName" onChange={this.onHandleChange} className="form-control" placeholder="Tên công việc" />
                                </div>
                                <div className="col">
                                    <select value={this.state.priority} name="priority" onChange={this.onHandleChange} className="form-control" id="exampleFormControlSelect1">
                                        <option value={1}>Low</option>
                                        <option value={2}>Normal</option>
                                        <option value={3}>Hight</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary" onClick={this.onClickAddJob}>Thêm</button>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            }
        }

        return (
            <div className="add-form row">
                <div className="col-md-12">
                    <button className="btn btn-danger btn-sm" onClick={() => this.handleClickShowForm()}>Thêm công việc</button>
                </div>
                <div className="col-md-12">
                    {formElm()}
                </div>
            </div>
        );
    }
}

export default AddJobForm;