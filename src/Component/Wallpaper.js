import React from "react";
import '../Styles/home.css';




class Wallpaper extends React.Component {
    handleLocationChange = (event) => {
        const locId = event.target.value;
        sessionStorage.setItem('locationId', locId);

    }


    render() {
        const { locationsData } = this.props;


        return (
            <div>
                { /* first block */}
                <div className="container-fluid back-img ">
                    <div className="row pt-4 col-12">
                        <div className="col-2 col-lg-7 col-md-6 col-sm-12"></div>
                        <div className="col-2 col-lg-2 col-md-2 col-sm-12  text-end">
                            <a href="#" className="login ">Login</a>
                        </div>
                        <div className="col-8 col-lg-3 col-md-4 col-sm-12">
                            <a href="#" className="create px-2 py-3">Create an account</a>
                        </div>
                    </div>

                    {  /* second e symbol */}
                    <div className=" row pt-5 mx-auto text-center">

                        <div className="col-12">
                            <p className="esymbol px-4 py-3 px-md-4 py-md-2 text-center ">e!</p>
                        </div>

                    </div>
                    <div className="row pt-4  text-center ">
                        <div className="col-12">
                            <p className="content">Find the best restaurants, cafés, and bars</p>
                        </div>
                    </div>
                    {  /*search and select menu*/}
                    <div className="search">
                        <div className=" row mx-auto mx-3 text-center pt-1 px-5  ">
                            {/* <div className="col-12 col-lg-2 col-md-1 col-sm-12"></div> */}
                            {/* <div className="mb-3"> */}
                            <select className="select-item col-12 col-lg-4 col-md-4 col-sm-12   px-3 py-3" onChange={this.handleLocationChange}>
                                <option value="0">Please type a location</option>
                                {locationsData.map((item, index) => {
                                    return <option key={item.location_id} value={item.location_id}>{`${item.name},${item.city}`}</option>
                                })}
                            </select>
                            {/* </div> */}
                            {/* <div className=" search-item"> */}
                            {/* <span className="ssa fas fa-search" className="ass" style={{ position: "absolute", top: "23px", marginLeft: "-205px", color: "gray" }}></span> */}
                            <input type="text" className="select-item col-12 col-lg-4 col-md-4 col-sm-12   px-2 py-3 mx-3 "
                                placeholder="Search for restaurants" />

                            {/* </div> */}
                            {/* <div className="col-12 col-lg-2 col-md-1 col-sm-12"></div> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Wallpaper;