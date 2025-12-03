import { Suspense } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
	GoogleMap,
	GoogleMapApiLoader,
	Marker,
	CustomMarker,
	AdvancedMarker,
	PinElement,
	Polyline,
} from "react-google-map-wrapper";

import styles from "./GMap.module.scss";

function GMap() {
	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

	const pathToGym = [
		{ lat: 49.99336669405517, lng: 36.23162977384829 },
		{ lat: 49.993442564451705, lng: 36.23110942535665 },
		{ lat: 49.99363223991932, lng: 36.2311711161572 },
		{ lat: 49.99363569616529, lng: 36.231105428405726 },
		{ lat: 49.993667181925126, lng: 36.23110566266259 },
	];

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
					<Polyline
						path={pathToGym}
						strokeColor="#FF0000"
						strokeOpacity={1.0}
						strokeWeight={2}
						geodesic
					/>
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
