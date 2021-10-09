import React from 'react';
import '../Styles/filter.css';
import queryString from 'query-string';
import axios from 'axios';

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurents: []
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { mealtype, location } = qs;


        const filterObj = {
            mealtype_id: mealtype,
            location_id: location
        };

        axios({
            url: 'http://localhost:2019/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ restaurents: response.data.restaurents, mealtype, location })
            })
            .catch()
    }

    render() {
        const { restaurents } = this.state;
        return (
            <div>

                <div id="myId" className="heading">Breakfast Places in Mumbai</div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4 filter-options">
                            <div className="filter-heading">Filters / Sort</div>
                            <span className="glyphicon glyphicon-chevron-down toggle-span" data-toggle="collapse"
                                data-target="#filter"></span>
                            <div id="filter" className="collapse show">
                                <div className="Select-Location">Select Location</div>
                                <select className="Rectangle-2236">
                                    <option>Select</option>
                                    <option>Delhi</option>
                                </select>
                                <div className="Cuisine">Cuisine</div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="checkbox-items">North Indian</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="checkbox-items">South Indian</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="checkbox-items">Chineese</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="checkbox-items">Fast Food</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span className="checkbox-items">Street Food</span>
                                </div>
                                <div className="Cuisine">Cost For Two</div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">Less than &#8377; 500</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">&#8377; 500 to &#8377; 1000</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">&#8377; 1000 to &#8377; 1500</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">&#8377; 1500 to &#8377; 2000</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">&#8377; 2000 +</span>
                                </div>
                                <div className="Cuisine">Sort</div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">Price low to high</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span className="checkbox-items">Price high to low</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            {restaurents && restaurents.map((item, index) => {
                                return <div className="Item" key={index}>
                                    <div>
                                        <div className="small-item vertical">
                                            <img className="img" src="./Assets/breakfast.jpg" />
                                        </div>
                                        <div className="big-item">
                                            <div className="rest-name">{item.name}</div>
                                            <div className="rest-location">{item.locality}</div>
                                            <div className="rest-address">{item.city}</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="margin-left">
                                            <div className="Bakery">CUISINES : {item.cuisine.map((val) => `${val.name}, `)}</div>
                                            <div className="Bakery">COST FOR TWO : &#8377; {item.min_price} </div>
                                        </div>
                                    </div>
                                </div>
                            })}

                            <div className="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;