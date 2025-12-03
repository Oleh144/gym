import { Suspense } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
	GoogleMap,
	GoogleMapApiLoader,
	Marker,
	CustomMarker,
	AdvancedMarker,
	PinElement,
} from "react-google-map-wrapper";

import styles from "./GMap.module.scss";

function GMap() {
	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

	return (
		<Suspense>
			<GoogleMapApiLoader apiKey={apiKey} suspense>
				<GoogleMap
					style={{ width: "100%", height: "100%" }}
					zoom={17}
					mapOptions={{
						mapTypeControl: false,
						colorScheme: "DARK",
					}}
					center={{ lat: 49.99376313381941, lng: 36.23106023674629 }}>
					<CustomMarker
						lat={49.99376313381941}
						lng={36.23106023674629}>
						<div className={styles.pointer}>
							<span className={styles.icon}>
								<LocationOnIcon />
							</span>
							<span className={styles.title}>Sport Time</span>
						</div>
					</CustomMarker>
				</GoogleMap>
			</GoogleMapApiLoader>
		</Suspense>
	);
}

export default GMap;
