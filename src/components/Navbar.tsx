import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
	type MenuItem = {
		id: number;
		name: string;
		link: string;
		subItems?: MenuItem[];
	};
	const services: MenuItem[] = [
		{ id: 11, name: "Economics", link: "/" },
		{ id: 12, name: "Statistics", link: "/" },
		{ id: 13, name: "Financial Management", link: "/" },
		{ id: 14, name: "Accounting", link: "/" },
	];

	const menuItems: MenuItem[] = [
		{
			id: 1,
			name: "Services",
			link: "/",
			subItems: services,
		},
		{
			id: 2,
			name: "Contact",
			link: "/contact",
		},
		{
			id: 3,
			name: "Pricing",
			link: "/pricing",
		},
	];

	const [isDark, setIsDark] = useState(
		JSON.parse(localStorage.getItem("isDark") || "false")
	);
	useEffect(() => {
		localStorage.setItem("isDark", JSON.stringify(isDark));
	}, [isDark]);

	return (
		<>
			<div className="navbar bg-base-100 relative z-10">
				{/* start  */}
				<div className="navbar-start">
					{/* dropdown for small screens  */}
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menuItems.map((menuItem) => (
								<li key={menuItem.id}>
									<Link to={menuItem.link}>{menuItem.name}</Link>
									{menuItem.subItems && (
										<ul className="p-2">
											{menuItem.subItems.map((subMenuItem: MenuItem) => (
												<li key={subMenuItem.id}>
													<Link to={subMenuItem.link}>{subMenuItem.name}</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">EasyMakeAssignment</a>
				</div>
				{/*  center  */}
				<div className="navbar-center hidden md:flex">
					<ul className="menu menu-horizontal px-1">
						{menuItems.map(({ id, name, link, subItems }) => (
							<li key={id}>
								{!subItems ? (
									<Link to={link}>{name}</Link>
								) : (
									<details>
										<summary>{name}</summary>
										<ul className="z-10 p-2">
											{subItems.map(({ id, link, name }: MenuItem) => (
												<li key={id}>
													<Link to={link}>{name}</Link>
												</li>
											))}
										</ul>
									</details>
								)}
							</li>
						))}
					</ul>
				</div>
				{/* end  */}
				<div className="navbar-end">
					{/* cart */}

					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
						>
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">8</span>
							</div>
						</div>
						<div
							tabIndex={0}
							className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
						>
							<div className="card-body">
								<span className="font-bold text-lg">8 Items</span>
								<span className="text-info">Subtotal: $999</span>
								<div className="card-actions">
									<button className="btn btn-primary btn-block">
										View cart
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* profile  */}
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
							<li>
								<label className="flex cursor-pointer gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="5" />
										<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
									</svg>
									<input
										type="checkbox"
										value="dark"
										checked={isDark}
										onChange={() => setIsDark(!isDark)}
										className="toggle theme-controller"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
									</svg>
								</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
