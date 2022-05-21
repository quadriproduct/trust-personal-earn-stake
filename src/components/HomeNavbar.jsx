import React from 'react';

export default function HomeNavbar() {
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand">Logo</a>
				<div className="d-flex align-items-center">
          <div className="d-flex">
            <p className="me-3">Login</p>
            <p className="me-3">Sign Up</p>
          </div>
        </div>
			</div>
		</nav>
	);
}
