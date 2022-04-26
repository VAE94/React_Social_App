import React from 'react';
import { TiHome} from 'react-icons/ti';
import {FaSignInAlt} from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar bg-primary">
				<h1>
					<Link to="/index">JusT Post</Link>
				</h1>
				<ul>
					<li>
						<Link to="/">
							<TiHome /> Home
						</Link>
					</li>
					<li>
						<Link to="/login">
							<FaSignInAlt /> Log in
						</Link>
					</li>
					<li>
						<Link to="/register">
							<FaRegUserCircle />
							Sign up
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
