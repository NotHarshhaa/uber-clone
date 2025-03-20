import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import { useRouter } from "next/router";
import Link from "next/link";
import RideSelector from "../components/RideSelector";

export default function Confirm() {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getCoordinates = async (location, setCoordinates) => {
    if (!location) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?` +
          new URLSearchParams({
            access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
            limit: 1,
          })
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        setCoordinates(data.features[0].center);
      } else {
        console.error("No coordinates found for:", location);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  useEffect(() => {
    if (pickup) getCoordinates(pickup, setPickupCoordinates);
    if (dropoff) getCoordinates(dropoff, setDropoffCoordinates);
  }, [pickup, dropoff]); // Added dependencies to avoid unnecessary calls

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map pickup={pickupCoordinates} dropoff={dropoffCoordinates} />
      <RideContainer>
        <RideSelector pickup={pickupCoordinates} dropoff={dropoffCoordinates} />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Uber</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
}

// Styled components
const Wrapper = tw.div`flex h-screen flex-col`;
const ButtonContainer = tw.div`rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`;
const BackButton = tw.img``;
const RideContainer = tw.div`flex-1 flex flex-col h-1/2`;
const ConfirmButtonContainer = tw.div`border-t-2`;
const ConfirmButton = tw.div`bg-black text-white m-4 text-center py-4 cursor-pointer transition hover:bg-gray-800`;
