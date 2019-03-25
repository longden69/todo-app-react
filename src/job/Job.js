import React, {Component} from 'react';

class Job extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>1</td>
                <td>Name</td>
                <td>Hight</td>
                <td>
                    <button className="btn btn-info btn-sm">Sửa</button>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default Job;