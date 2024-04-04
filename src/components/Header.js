import { useState } from 'react';

function Header() {
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
        window.open(searchUrl, '_blank');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Word Application</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/home">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="/home">Partner</a></li>
                        <li className="nav-item"><a className="nav-link" href="/home">Contact Us</a></li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="text" placeholder="Search" value={search} onChange={handleInputChange}
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
