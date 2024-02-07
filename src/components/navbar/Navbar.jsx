import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#wgpt3">What is GPT3?</a>
		</p>
		<p>
			<a href="#possibility">Open AI</a>
		</p>
		<p>
			<a href="#features">Case Studies</a>
		</p>
		<p>
			<a href="#blog">Library</a>
		</p>
	</>
);

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [renderMenu, setRenderMenu] = useState(true);

	useEffect(() => {
		if (!toggleMenu) {
			const timeoutId = setTimeout(() => setRenderMenu(false), 200);
			return () => clearTimeout(timeoutId);
		} else {
			setRenderMenu(true);
		}
	}, [toggleMenu]);

	return (
		<nav className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img src={logo} alt="" />
				</div>
				<div className="gpt3__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}

				{renderMenu && (
					<div
						className={`gpt3__navbar-menu_container ${
							toggleMenu ? "slide-bottom" : "slide-top"
						}`}
					>
						<div className="gpt3__navbar-menu_container-links">
							<Menu />
							<div className="gpt3__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
