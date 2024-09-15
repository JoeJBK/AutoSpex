import { Image, Input, Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-orange p-4">
      <div className="flex flex-row gap-4 space-between text-white">
        <div className="w-1/3">
        <Image
          src="/assets/imgs/whitelogo.png"
        />
        </div>
        
        <div>
          <h3 className="text-xl font-bold ">Stay in the know</h3>
          <p>Join our newsletter to get the latest </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <Input type="email" label="Email" />
          <Button className="bg-carbon text-white">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="text-center text-gray-600">
      </div>
    </footer>
  );
}
