import { Suspense } from "react";
import {
	GoogleMap,
	GoogleMapApiLoader,
	Marker,
} from "react-google-map-wrapper";

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
					<Marker lat={49.99376313381941} lng={36.23106023674629} />
				</GoogleMap>
			</GoogleMapApiLoader>
		</Suspense>
	);
}

export default GMap;
