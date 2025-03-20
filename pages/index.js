import { useEffect, useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Map from "../components/Map";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName || "User",
          photoUrl: user.photoURL || "/default-profile.png", // Fallback image
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []); // Dependency array added to prevent infinite loops

  return (
    <Wrapper>
      <Map pickup={[]} dropoff={[]} />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user?.name}</Name>
            <UserImage
              src={user?.photoUrl}
              alt="User Profile"
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton onClick={() => alert("Feature coming soon!")}>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheel
          </ActionButton>
          <ActionButton onClick={() => alert("Feature coming soon!")}>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

// Styled components
const Wrapper = tw.div`flex flex-col h-screen`;
const ActionItems = tw.div`flex-1 p-4`;
const Header = tw.div`flex justify-between items-center`;
const UberLogo = tw.img`h-28`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-4 w-20 text-sm`;
const UserImage = tw.img`h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer`;
const ActionButtons = tw.div`flex`;
const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg 
  transform hover:scale-105 transition text-xl cursor-pointer
`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`;
