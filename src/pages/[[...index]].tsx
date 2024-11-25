import Image from "next/image";
import localFont from "next/font/local";
import { SignedIn, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <SignedOut>
        <SignIn path="/" />
      </SignedOut>
      <SignedIn>
        <div> Hello World</div>
        <SignOutButton> Signout</SignOutButton>
      </SignedIn>
    </>
  );
}
