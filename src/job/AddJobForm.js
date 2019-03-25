import React, {Component} from 'react';

class AddJobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddForm: false
        }

        this.handleClickShowForm = this.handleClickShowForm.bind(this);
    }

    handleClickShowForm() {
        this.setState({
            showAddForm: !this.state.showAddForm
        })
    }

    render() {
        let formElm = null;

        formElm = () => {
            if (this.state.showAddForm) {
                return (
                    <div className="row">
                        <div className="col-md-12 content-add-form">
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Tên công việc" />
                                    </div>
                                    <div className="col">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary">Thêm</button>
                                    </div>
                                </div>
                            </form>
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