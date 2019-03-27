import React, {Component} from 'react';
import './Job.css';

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEditForm: false
        }

        this.onShowEditForm = this.onShowEditForm.bind(this);
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

    render() {
        let rowElm = null;
        rowElm = () => {
            if (this.state.isShowEditForm) {
                return (
                    <>
                        <td>{this.props.indexOfItem + 1}</td>
                        <td><input className="form-control mr-sm-2" type="text" placeholder="text"/></td>
                        <td>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-info btn-sm">Sửa
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