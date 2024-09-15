'use client';
import { Image, User, Button, Link } from "@nextui-org/react";

export default function Header() {
  return (
    <header className="text-blue flex items-center justify-between p-6 gap-4">
      <div>
        <Image
          width={'450'}
          alt="Site logo"
          className="cursor-pointer max-w-[50%] opacity-100"
          onClick={() => { window.location.replace('/'); }}
          src="/assets/imgs/whitelogo.png"
        />
      </div>
      <div className="flex flex-row items-center space-between gap-2 md:gap-4 max-w-[60%]">
        <Button as={Link} href="/" className="bg-transparent text-off-white px-2 min-w-fit hover:text-pale">
          Home
        </Button>
        <Button as={Link} href="/tools" className="bg-transparent text-off-white px-2 min-w-fit hover:text-pale">
          Tools
        </Button>
        <Button as={Link} href="/contact" className="bg-transparent text-off-white px-2 min-w-fit hover:text-pale">
          Contact
        </Button>
        <User
          name={''}
          description={''}
          avatarProps={{
            src: ''
          }}
          onClick={() => { window.location.replace('/account'); }}
          className="hover:cursor-pointer ml-1"
        />
      </div>
    </header>
  );
}