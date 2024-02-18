import { useEffect, useRef, useState } from "react";

export default function HeaderSection() {
	const [imageSize, setImageSize] = useState<{ height: number; width: number }>(
		{
			height: 0,
			width: 0,
		}
	);
	const imgRef = useRef(null);

	useEffect(() => {
		const updateImageSize = () => {
			if (imgRef.current) {
				const { clientHeight, clientWidth } = imgRef.current;
				setImageSize({ height: clientHeight, width: clientWidth });
			}
		};

		updateImageSize(); // Call initially to set the initial size

		// Recalculate the size when the window is resized
		window.addEventListener("resize", updateImageSize);

		return () => {
			// Clean up the event listener
			window.removeEventListener("resize", updateImageSize);
		};
	}, []);

	return (
		<>
			<section className="flex w-full h-[90vh]">
				<article className="prose ml-6 flex w-6/12 flex-col justify-center ">
					<h1 className="">Lorem ipsum dolor sit amet.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
						veniam, perferendis error saepe excepturi voluptas ipsa aspernatur!
						Explicabo, quisquam minus quae odit dolorem, fuga quis, harum aut
						cupiditate numquam eligendi.
					</p>
					<button className="btn btn-accent btn-lg w-fit rounded-badge  mt-5">
						GET STARTED
					</button>
				</article>
				<div className="flex ml-auto w-6/12 relative justify-center items-center">
					<div
						style={{
							height: `calc(${imageSize.height}px + 4vw)`,
							width: `calc(${imageSize.width}px + 4vw)`,
						}}
						className="bg-primary bg-opacity-60 flex absolute -z-[2] rounded-xl rotate-3"
					></div>
					<div
						style={{
							height: `calc(${imageSize.height + 50}px - 7vw)`,
							width: `calc(${imageSize.width}px + 3vw)`,
						}}
						className="bg-transparent border-2 border-accent flex absolute -z-[1] rounded-xl -rotate-12"
					></div>
					<img
						ref={imgRef}
						className="rounded-xl w-10/12"
						src="/laptop.jpg"
						alt="girl with laptop and a pencel in his mouth looking tense"
					/>
				</div>
			</section>
		</>
	);
}
