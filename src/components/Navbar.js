import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/App.css';

const Navbar = () => {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`search/${query}`);
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-success shadow-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">The Report Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/national">National</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/international">International</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/politics">Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/economics">Economics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./search/technology">Technology</Link>
                        </li>

                    </ul>
                    <form onSubmit={(e) => handleSearch(e)} className="d-flex" role="search">
                        <input className="form-control me-2" onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search News here..." aria-label="Search" />
                        <button className="btn btn-warning fw-bold" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
