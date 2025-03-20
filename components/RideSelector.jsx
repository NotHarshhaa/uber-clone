import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "./data/data";

export default function RideSelector({ pickup, dropoff }) {
    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};,${dropoff[0]},${dropoff[1]}
            ?access_token=pk.eyJ1IjoiaWFuMDM4IiwiYSI6ImNrejRkdWVscDBmZzgyb28yOGVjazFkaWMifQ.rpr-o9cBKiJ2PGh8K8VzXA`)
          .then(res => res.json()).then(data => {
            console.log(data)
            setRideDuration(data.routes[0].duration /60 / 100);
          });
    }, [pickup,dropoff]);

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
            {carList.map((car, index) => (
                <Car key={index}>
                <CarImage src={car.imgUrl}></CarImage>
                <CarDetails>
                    <Service>{car.service}</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>{'$'+(rideDuration*car.multiplier).toFixed(2)}</Price>
                </Car>
            ))}
            </CarList>
        </Wrapper>
    )
}

const Time = tw.div`
text-xs text-blue-500
`;

const Service = tw.div`
font-medium
`;

const Car = tw.div`
flex p-4 items-center 
`;

const CarImage = tw.img`
h-14 mr-4
`;

const CarDetails = tw.div`
flex-1
`;

const Price = tw.div`
text-sm
`;

const CarList = tw.div`
overflow-y-scroll
`;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;