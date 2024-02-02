import Image from "next/image";

const Roadmap = () => {
	return (
		<div className="h-96 bg-black w-full">
			<div
				className="bg-cover mix-blend-luminosity ml-11 mr-11"
				style={{
					backgroundImage: "url('/images/home1.png')",
					width: "1348px",
					height: "301.597px",
				}}
			>
				<div className="flex items-center justify-center">
					<div>
						<div className="text-center text-primary text-5xl font-normal font-secondary pb-4">
							hackathon venue
						</div>
						<div className="text-right text-white text-6xl font-normal font-secondary pb-2">
							christ college of engineering
						</div>
						<div className="text-center text-neutral-400 text-4xl font-normal font-secondary">
							irinjalakuda, thrissur, kerala
						</div>
					</div>
				</div>
			</div>

			<div className="px-48">
				<div>
					<div className="font-secondary py-4 text-[58px] font-normal">
						<span className="text-white">hackathon </span>
						<span className="text-fuchsia-500">roadmap</span>
					</div>
				</div>
				<div className="flex justify-center items-start gap-10">
					<div className="grid grid-cols-3 grid-rows-2 gap-14 py-4">
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								<span className="font-tertiary font-extrabold">
									05
								</span>
								th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Registration</span>{" "}
								for DESIGNATHON ‘24 starts through Devfolio.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								<span className="font-tertiary font-extrabold">
									20
								</span>
								th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Registration</span>{" "}
								of DESIGNATHON ‘24 comes to an end.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								<span className="font-tertiary font-extrabold">
									22
								</span>
								th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Shortlisting</span>{" "}
								based on submissions and user profiles.{" "}
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								<span className="font-tertiary font-extrabold">
									24
								</span>
								th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">Shortlisted</span>{" "}
								Participants are informed via emails.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								<span className="font-tertiary font-extrabold">
									28
								</span>
								th February
							</h3>
							<p className="font-tertiary text-white">
								<span className="font-bold">DESIGNATHON’</span>{" "}
								24 begins at 06 PM in the evening.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="font-secondary text-2xl text-primary">
								<span className="font-tertiary font-extrabold">
									29
								</span>
								th February
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
