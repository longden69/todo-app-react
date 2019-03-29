import React, {Component} from 'react';
import './Job.css';

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false,
            name: this.props.item.name,
            priority: this.props.item.priority
        }

        this.onShowEditForm = this.onShowEditForm.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePriority = this.handleChangePriority.bind(this);
    }

    onShowEditForm() {
        this.setState({
            isShowEditForm: true
        });
    }

    onHideEditForm() {
        this.setState({
            isShowEditForm: false
        })
    }

    editJob() {
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePriority(event) {
        this.setState({priority: event.target.value});
    }

    render() {
        let rowElm = null;
        rowElm = () => {
            if (this.state.isShowEditForm) {
                return (
                    <>
                        <td>{this.props.indexOfItem + 1}</td>
                        <td><input className="form-control mr-sm-2" value={this.state.name} onChange={this.handleChangeName} type="text" placeholder="text"/></td>
                        <td>
                            <select className="form-control" value={this.state.priority} onChange={this.handleChangePriority} id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-info btn-sm" onClick={() => {
                                this.editJob()
                            }}>Sửa
                            </button>
                            <button className="btn btn-default btn-sm" onClick={() => {
                                this.onHideEditForm()
                            }}>Hủy</button>
                        </td>
                    </>
                );
            }

            if (!this.state.isShowEditForm) {
                return (
                    <>
                        <td>{this.props.indexOfItem + 1}</td>
                        <td>{this.props.item.name}</td>
                        <td>{this.props.item.priority}</td>
                        <td>
                            <button className="btn btn-info btn-sm" onClick={() => {
                                this.onShowEditForm()
                            }}>Sửa
                            </button>
                            <button className="btn btn-danger btn-sm">Xóa</button>
                        </td>
                    </>
                );
            }
        }

        return (
            <tr>
                {rowElm()}
            </tr>
        );
    }
}

export default Job;