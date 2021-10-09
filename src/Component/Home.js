import React from "react";
import axios from "axios";

import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            mealtypes: []
        }
    }
    componentDidMount() {
        sessionStorage.clear();

        {/**1*/ }
        axios({
            url: 'http://localhost:2019/locations',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            this.setState({ locations: response.data.locations })
        })
            .catch()

        {/**2 */ }
        axios({
            url: 'http://localhost:2019/mealtypes',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            this.setState({ mealtypes: response.data.mealtypes })
        })
            .catch()


    }

    render() {
        const { locations, mealtypes } = this.state;
        return (
            <div>
                <Wallpaper locationsData={locations} />
                <QuickSearch QuickSearchData={mealtypes} />

            </div>
        )
    }
}
export default Home;