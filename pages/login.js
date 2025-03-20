import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });

    return () => unsubscribe(); // Cleanup function to avoid memory leaks
  }, [router]); // Added `router` to the dependency array for better reactivity

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" alt="Uber Logo" />
      <Title>Log in to access your account.</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="Login Image" />
      <SignInButton onClick={handleSignIn}>Sign in with Google</SignInButton>
    </Wrapper>
  );
}

// Styled components
const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-gray-200 p-4 items-center justify-center
`;

const SignInButton = tw.button`
  bg-black text-white text-center py-4 px-6 mt-8 rounded-lg w-64 hover:bg-gray-800 transition duration-300
`;

const UberLogo = tw.img`
  h-20 w-auto object-contain mb-4
`;

const Title = tw.div`
  text-3xl font-semibold text-gray-600 text-center
`;

const HeadImage = tw.img`
  w-3/4 max-w-md object-contain mt-6
`;
