import Navbar from "../components/Navbar";

function Pricing() {
  return (
    <>
      <Navbar></Navbar>
			<div className="cards">
				<div className=" card-1 card w-96 bg-base-100 border border-primary">
					<div className="card-body">
						<h2 className="card-title">Register</h2>
						<p>Just fill in the form below and you will be ready to go!</p>
					</div>
					<figure>
						<form action="" className="form-control gap-4 mb-5 w-9/12">
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Name</span>
								</div>
								<input
									type="text"
									placeholder="Daisy"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Email</span>
								</div>
								<input
									type="email"
									placeholder="Daisy@example.com"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control   w-full max-w-xs">
								<div className="label">
									<span className="label-text">Password</span>
								</div>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered input-primary w-full max-w-xs"
								/>
							</label>
							<button type="submit" className="btn btn-primary w-fit self-end ">
								Submit
							</button>
						</form>
					</figure>
				</div>
				{/* <div className="card card-2 w-96 bg-base-100 border border-primary">
					<div className="card-body">
						<h2 className="card-title">Choose plan</h2>
						<p>Just fill in the form below and you will be ready to go!</p>
					</div>
					<figure>
						<form action="" className="form-control gap-4 mb-5 w-9/12">
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Name</span>
								</div>
								<input
									type="text"
									placeholder="Daisy"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Email</span>
								</div>
								<input
									type="email"
									placeholder="Daisy@example.com"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control   w-full max-w-xs">
								<div className="label">
									<span className="label-text">Password</span>
								</div>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered input-primary w-full max-w-xs"
								/>
							</label>
							<button type="submit" className="btn btn-primary w-fit self-end ">
								Submit
							</button>
						</form>
					</figure>
				</div>
				<div className="hidden card-3 card w-96 bg-base-100 border border-primary">
					<div className="card-body">
						<h2 className="card-title">Register</h2>
						<p>Just fill in the form below and you will be ready to go!</p>
					</div>
					<figure>
						<form action="" className="form-control gap-4 mb-5 w-9/12">
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Name</span>
								</div>
								<input
									type="text"
									placeholder="Daisy"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Email</span>
								</div>
								<input
									type="email"
									placeholder="Daisy@example.com"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control   w-full max-w-xs">
								<div className="label">
									<span className="label-text">Password</span>
								</div>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered input-primary w-full max-w-xs"
								/>
							</label>
							<button type="submit" className="btn btn-primary w-fit self-end ">
								Submit
							</button>
						</form>
					</figure>
				</div>
				<div className="hidden card-4 card w-96 bg-base-100 border border-primary">
					<div className="card-body">
						<h2 className="card-title">Register</h2>
						<p>Just fill in the form below and you will be ready to go!</p>
					</div>
					<figure>
						<form action="" className="form-control gap-4 mb-5 w-9/12">
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Name</span>
								</div>
								<input
									type="text"
									placeholder="Daisy"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Email</span>
								</div>
								<input
									type="email"
									placeholder="Daisy@example.com"
									className="input input-bordered border-primary w-full max-w-xs"
								/>
							</label>
							<label className="form-control   w-full max-w-xs">
								<div className="label">
									<span className="label-text">Password</span>
								</div>
								<input
									type="password"
									placeholder="Password"
									className="input input-bordered input-primary w-full max-w-xs"
								/>
							</label>
							<button type="submit" className="btn btn-primary w-fit self-end ">
								Submit
							</button>
						</form>
					</figure>
				</div> */}
			</div>
		</>
	);
}

export default Pricing;