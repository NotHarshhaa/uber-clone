import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

export default function Search() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    if (!pickup.trim() || !dropoff.trim()) {
      alert("Please enter both pickup and dropoff locations.");
      return;
    }
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back"
          />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt="Pickup Icon"
          />
          <Line
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt="Line Icon"
          />
          <Square
            src="https://img.icons8.com/windows/50/000000/square-full.png"
            alt="Destination Icon"
          />
        </FromToIcons>

        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon
          src="https://img.icons8.com/ios/50/000000/plus-math.png"
          alt="Add Stop"
        />
      </InputContainer>

      <SavedPlaces>
        <StarIcon
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          alt="Star Icon"
        />
        Saved Places
      </SavedPlaces>

      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup.trim(),
            dropoff: dropoff.trim(),
          },
        }}
      >
        <ConfirmButton onClick={handleConfirm}>Confirm Locations</ConfirmButton>
      </Link>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = tw.div`
  bg-gray-200 h-screen flex flex-col justify-center items-center p-4
`;

const ButtonContainer = tw.div`
  bg-white px-4 w-full flex justify-start
`;

const BackButton = tw.img`
  h-10 cursor-pointer
`;

const InputContainer = tw.div`
  bg-white flex items-center px-4 py-2 rounded-lg shadow-md w-full max-w-lg
`;

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10
`;

const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex flex-col flex-1
`;

const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-lg px-3 outline-none border-none focus:ring-2 focus:ring-gray-400
`;

const PlusIcon = tw.img`
  h-10 w-10 bg-gray-200 rounded-full ml-3 cursor-pointer hover:bg-gray-300 transition
`;

const SavedPlaces = tw.div`
  flex items-center justify-center bg-white px-4 py-3 rounded-lg shadow-md w-full max-w-lg mt-4 cursor-pointer hover:bg-gray-100 transition
`;

const StarIcon = tw.img`
  bg-gray-400 h-10 w-10 p-2 mr-2 rounded-full
`;

const ConfirmButton = tw.button`
  bg-black text-white text-center mt-4 px-6 py-3 text-lg rounded-lg cursor-pointer hover:bg-gray-900 transition w-full max-w-lg
`;
