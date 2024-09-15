import { Image, Input, Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-orange p-4 mt-12">
      <div className="flex flex-row gap-4 text-white">
        <div className="flex-1">
          <Image
            src="/assets/imgs/whitelogo.png"
            alt="Logo"
            className="w-full h-auto max-w-[300px]"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold">Stay in the know</h3>
          <p className="text-sm">Join our newsletter to get the latest updates and offers.</p>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-2">
          <div className="flex-1 flex items-center">
            <Input type="email" label="Email" className="flex-1" />
          </div>
          <div className="flex-none flex items-center">
            <Button className="bg-carbon text-white w-full h-12 lg:h-12">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center p-6">
        {/* {'todo'} */}
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} AutoSpex. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
