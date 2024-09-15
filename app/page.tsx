import { Image, Card, CardHeader, CardBody, CardFooter, Button, Link } from "@nextui-org/react";
import { FaTools } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { BsRobot } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

export default async function Home() {

  return (
    <div className="space-y-4 pb-64">
      <div className="p-4 flex flex-col md:flex-row items center">
        <Image
          width="100%"
          src="/assets/imgs/mustang.png"
          className="m-auto"
          disableSkeleton={false}
          loading="lazy"
        />
        <Card className="bg-transparent text-white">
          <CardHeader>
            <h2 className="text-xl font-bold">Cutting Edge Data Analytics</h2>
          </CardHeader>
          <CardBody>
            We use advanced AI and large automotive databases to help you find the best car for your budget. Our tools analyze real-time market data, trends, and vehicle specs to offer personalized recommendations. With this technology, car buying becomes faster, smarter, and tailored to your needs.           </CardBody>
          <CardFooter>
            <Button as={Link} href="/tools" className="bg-orange text-white font-semibold">
              <FaTools /> Discover Now
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-orange p-4 flex flex-col items-center">
        <h2 className="bg-carbon text-xl text-white font-bold rounded-md inline-block px-4 py-1">
          Our Tools
        </h2>

        <p className="text-center text-white max-w-md mt-2">
          Explore our AI-driven tools designed to give you the best car-buying experience. From analyzing market trends to personalized recommendations, we’ve got you covered.
        </p>

        <div className="gap-4 flex flex-col md:flex-row space-between pt-4">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">
                Market Analyzer
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700">
                Get detailed insights into the car market, including price trends, vehicle demand, and more to help make informed decisions.
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="/tools/vin-analyzer" className="m-auto bg-carbon text-white">
                <VscGraphLine /> Try Now
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">
                CarBot
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700">
                Chat with our AI-powered CarBot to find the perfect car based on your preferences and budget in real-time.
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="/tools/carbot" className="m-auto bg-carbon text-white">
                <BsRobot /> Chat Now
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">
                Custom Solutions
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700">
                Need something more specific? We provide custom solutions tailored to your automotive needs. Contact us today!
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="/contact" className="m-auto bg-carbon text-white">
                <GrContact /> Contact Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

    </div>
  );
}
