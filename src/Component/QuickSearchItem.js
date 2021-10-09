import React from "react";
import { withRouter } from 'react-router-dom';

class QuickSearchItem extends React.Component {


    handleNavigate = (mealTypeId) => {
        const locationId = sessionStorage.getItem('locationId');
        if (locationId) {
            this.props.history.push(`/filter?mealtype=${mealTypeId}&location=${locationId}`);
        } else {
            this.props.history.push(`/filter?mealtype=${mealTypeId}`);
        }

    }

    render() {
        const { item } = this.props;
        return (
            <div onClick={() => this.handleNavigate(item.meal_type)} key={item.meal_type} className="  col-lg-4 col-md-6 col-sm-12  item">
                <div className="row">


                    <div className="col-6 mx-0 px-0">
                        <img src={`../${item.image}`} alt="" height="160px" width="160px" />
                    </div>
                    <div className="col-6 px-3 py-4">
                        <div className="header">{item.name} </div>
                        <div className="cont">{item.content}</div>
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(QuickSearchItem);