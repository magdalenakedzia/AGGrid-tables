import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import "./index.scss";

const HomePage = (): JSX.Element => {
    return (
        <>
            <h1>AG GRID TABLES</h1>
            <div className='buttons-container'>
            <Router>
                <Link to="/table-client-side" className="btn first"> Table </Link>
                <Link  to="/" className="btn second"> Table </Link>
                <Link  to="/" className="btn third"> Table </Link>
                <Link  to="/" className="btn fourth"> Table </Link>
                <Link  to="/" className="btn fifth"> Table </Link>
                <Link  to="/" className="btn sixth"> Table </Link>
                </Router>
            </div>
        </>
    )
}

export default HomePage;