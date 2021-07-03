import React from 'react';

import { RiSearchEyeLine } from 'react-icons/ri';
import './index.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { searchValue: '' };

        this.onSearch = this.onSearch.bind(this);
        //this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    async onSearch() {
        const data = await (await fetch(`http://localhost:8888/${this.state.searchValue}`)).json();

        this.props.searchData(data);
    };

    handleChange(event) {
        this.setState({ searchValue: event.target.value });
    };

    render() {
        return (
            <div className="md:w-3/6 w-5/6 container bg-gray-100 rounded-lg p-4 gap-4 flex">
                <div className="bg-gray-200 rounded-lg p-2 flex items-center flex-grow">
                    <RiSearchEyeLine className="text-xl mx-2" />
                    <input value={this.state.searchValue} onChange={this.handleChange} type="text" className="bg-gray-200 p-2 mx-2 outline-none flex-grow" placeholder="Food name..." />
                </div>
                <div className="bg-gray-900 flex items-center text-white py-2 px-4 rounded-lg" onClick={this.onSearch}>
                    Search
                </div>
            </div>
        );
    };
};

export { SearchBar };