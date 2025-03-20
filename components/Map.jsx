import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiaWFuMDM4IiwiYSI6ImNrejRkdWVscDBmZzgyb28yOGVjazFkaWMifQ.rpr-o9cBKiJ2PGh8K8VzXA';

export default function Map({ pickup, dropoff }) {
    useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/ian038/ckzent9tw000w14qsp0bs46j2",
			center: [75.8366318, 25.1389012],
			zoom: 3
		});

		if (pickup.length != 0) {
			addCoordinates(map, pickup);
		}

		if (dropoff.length != 0) {
			addCoordinates(map, dropoff);
		}

		if (pickup.length != 0 && dropoff.length != 0) {
			map.fitBounds([pickup, dropoff], {
				padding: 60
			});
		}
	}, []);

	const addCoordinates = (map, coordinates) => {
		const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
	};

    return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
  flex-1 h-1/2
`;