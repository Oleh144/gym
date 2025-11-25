import { useState, useEffect } from "react";

function useWindowWidth() {
	let [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => window.addEventListener("resize", handleResize);
	}, []);

	return width;
}

export default useWindowWidth;
