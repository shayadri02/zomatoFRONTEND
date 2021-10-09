import React from "react";
import '../Styles/home.css';
import QuickSearchItem from "./QuickSearchItem";

class QuickSearch extends React.Component {
    render() {
        const { QuickSearchData } = this.props;
        return (
            <div>
                <div className="quick-item mt-4 ms-4">Quick Searches</div>
                <div className="dis-item mt-2 ms-4">Discover restaurants by type of meal</div>
                <div className="container">
                    <div className="row pt-4">
                        {QuickSearchData.length > 0 ?
                            QuickSearchData.map((item, index) => {
                                return <QuickSearchItem key={item.id} item={item} />

                            })
                            : <></>
                        }




                    </div>
                </div>





            </div>
        )
    }
}

export default QuickSearch;