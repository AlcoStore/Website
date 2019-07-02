import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";



class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    render() {
        return (
            <div className='loader'>
                <CircularProgress className='circulate'/>
            </div>
        );
    }
}

export default Loader;
