'use client';
import { Image, User } from "@nextui-org/react";

export default function Header() {
  return (
    <header className="text-blue flex items-center justify-between p-6">
      <div>
        <Image
          width={'250'}
          className="cursor-pointer max-w-[35%] md:max-w-[50%]"
          onClick={() => { window.location.replace('/'); }}
          src="/assets/imgs/bluelogo.png"
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