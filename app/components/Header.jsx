'use client';
import { Image, User } from "@nextui-org/react";

export default function Header() {
  return (
    <header className="text-blue flex items-center justify-between p-6">
      <div>
        <Image
          width={'250'}
          alt="Site logo"
          className="cursor-pointer max-w-[25%] md:max-w-[50%] opacity-100"
          onClick={() => { window.location.replace('/'); }}
          src="/assets/imgs/whitelogo.png"
        />
      </div>
      <div>
        <User
          name={''}
          description={''}
          avatarProps={{
            src: ''
          }}
        />
      </div>
    </header>
  );
}