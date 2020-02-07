import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="layer">
                    <p>Author: Karolina Kuchta</p>
                    <Link to='/admin'><button className="btn btn-warning goToAdmin">Admin Panel</button></Link>
                </div>
            </div>
        );
    }
}

export default Footer;