import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onClickSearchJob = this.onClickSearchJob.bind(this);
    }

    onHandleChange(event) {
        this.setState({
            strSearch: event.target.value
        })
    }

    onClickSearchJob() {
        this.props.onSearchJob(this.state.strSearch);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="foo">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="foo">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="foo">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="foo" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="foo">Action</a>
                                <a className="dropdown-item" href="foo">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="foo">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="foo" tabIndex="-1"
                               aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" value={this.state.strSearch} onChange={this.onHandleChange} type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.onClickSearchJob}>Search
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;