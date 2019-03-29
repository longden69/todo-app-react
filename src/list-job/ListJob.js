import React, {Component} from 'react';

import Job from './../job/Job'
import AddJobForm from './../job/AddJobForm'
import NavBar from './../navbar/NavBar'
import './ListJob.css'

class ListJob extends Component {
    data = [
        {
            id: 1,
            name: 'cv 1',
            priority: 3,
        },
        {
            id: 2,
            name: 'cv 12',
            priority: 3,
        },
        {
            id: 3,
            name: 'cv 123',
            priority: 3,
        },
        {
            id: 4,
            name: 'cv 1234',
            priority: 3,
        },
    ];

    constructor(props) {
        super(props);

        this.state = {
            strSearch: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddJob = this.handleAddJob.bind(this);
    }

    handleSearch(val) {
        this.setState({
            strSearch: val
        });
    }

    handleAddJob(job) {
        const newJob = {...job, id: this.data.length + 1};
        this.data.push(newJob);
        this.setState({
            strSearch: ''
        });
    }

    render() {
        let jobElm = null;
        jobElm = this.data.map((item, index) => {
            return <Job key={index} indexOfItem={index} item={item}/>
        });

        return (
            <div className="container-fluid">
                <div className="container">
                    <NavBar onSearchJob={this.handleSearch} />
                    <AddJobForm onSaveJob={this.handleAddJob} />
                    <div className="content row">
                        <div className="col-md-12">
                            <table className="table table-hovered table-job">
                                <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>Priority</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {jobElm}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListJob;