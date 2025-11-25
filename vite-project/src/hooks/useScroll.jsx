import { useState, useEffect } from "react";

function useScroll() {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	return scroll;
}

export default useScroll;
