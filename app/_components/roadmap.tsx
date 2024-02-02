const Roadmap = () => {
	return (
		<div className="w-full bg-black">
			<div>venue</div>
			<div className="px-48">
				<div>
					<div className="uppercase font-secondary py-4 text-[58px] font-normal">
						<span className="text-white">hackathon </span>
						<span className="text-fuchsia-500">roadmap</span>
					</div>
				</div>
				<div className="flex justify-center items-start gap-10">
					<div className="grid grid-cols-3 grid-rows-2 gap-14 py-4">
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								05th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Registration</span>{" "}
								for DESIGNATHON ‘24 starts through Devfolio.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								20th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Registration</span>{" "}
								of DESIGNATHON ‘24 comes to an end.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								22th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Shortlisting</span>{" "}
								based on submissions and user profiles.{" "}
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								24th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Shortlisted</span>{" "}
								Participants are informed via emails.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								28th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">DESIGNATHON’</span>{" "}
								24 begins at 06 PM in the evening.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								29th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">DESIGNATHON</span>{" "}
								‘24 ends and valedictory ceremony.
							</p>
						</div>
						d
					</div>
					<img
						className="w-36 h-32 mt-20"
						src="/images/roadmap.webp"
						alt="roadmap"
					/>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
