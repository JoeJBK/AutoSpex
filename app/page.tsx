import { Image, Card, CardHeader, CardBody, CardFooter, Button, Link } from "@nextui-org/react";
import { FaTools } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { BsRobot } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { IoBarChart } from "react-icons/io5";

export default async function Home() {

  return (
    <div className="space-y-4 pb-4">
      <div className="p-4 flex flex-col md:flex-row items center">
        <Image
          width="100%"
          src="/assets/imgs/mustang.png"
          className="m-auto"
          disableSkeleton={false}
          loading="lazy"
        />
        <Card className="bg-gradient-to-r from-carbon via-carbon to-cool-gray text-white shadow-lg rounded-lg p-6">
          <CardHeader className="flex items-center space-x-4 border-b">
            <FaChartLine className="text text-2xl" />
            <h2 className="text-2xl font-bold">Cutting Edge Data Analytics</h2>
          </CardHeader>
          <CardBody className="text-center text- mt-4">
            <p className="text-lg leading-relaxed">
              We leverage cutting-edge AI and extensive automotive databases to bring you the most relevant car recommendations. Our real-time market analysis tools examine trends, vehicle specifications, and your budget to offer personalized suggestions.
            </p>
            <p className="mt-4 text-gray-400">
              With our technology, your car-buying experience becomes smarter, faster, and tailored precisely to your needs. Explore the power of data-driven insights and find your ideal vehicle today.
            </p>
          </CardBody>
          <CardFooter className="flex justify-center mt-6">
            <Button as={Link} href="/tools" className="bg-orange hover:bg-orange text-white font-semibold px-4 py-2 flex items-center space-x-2">
              <FaTools className="text-xl" />
              <span>Discover Now</span>
            </Button>
          </CardFooter>
        </Card>

      </div>

      <div className="bg-orange p-4 flex flex-col items-center">
        <h2 className="bg-carbon shadow-lg text-xl text-white font-bold rounded-md inline-block px-4 py-1">
          Our Tools
        </h2>

        <p className="text-center text-white max-w-md mt-2">
          Discover our suite of AI-driven tools designed to enhance your car-buying journey. Whether you’re looking for in-depth market analysis or personalized recommendations, we have innovative solutions to meet your needs.
        </p>

        <div className="gap-4 flex flex-col md:flex-row space-between pt-4">
          <Card className="bg-carbon text-white rounded-lg shadow-lg">
            <CardHeader className="flex items-center space-x-2 border-b">
              <IoBarChart className="text-orange-500 text-xl" />
              <h3 className="text-lg font-bold">
                Market Analyzer
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-300">
                Dive into comprehensive market insights with our Market Analyzer. Track price fluctuations, assess vehicle demand, and view historical data to make smarter buying decisions. Our tool provides up-to-date statistics and actionable trends.
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="/tools/vin-analyzer" className="m-auto bg-white text-carbon hover:bg-gray-600">
                <VscGraphLine className="inline-block mr-2" /> Try Now
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-carbon text-white rounded-lg shadow-lg">
            <CardHeader className="flex items-center space-x-2 border-b">
              <BsRobot className="text-orange-500 text-xl" />
              <h3 className="text-lg font-bold">
                CarBot
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-300">
                Engage with CarBot, our AI-powered virtual assistant. CarBot helps you explore vehicle options based on your preferences and budget. Enjoy real-time conversations and receive tailored suggestions for the best car deals.
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="/tools/carbot" className="m-auto bg-white text-carbon">
                <BsRobot className="inline-block mr-2" /> Chat Now
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-carbon text-white rounded-lg shadow-lg">
            <CardHeader className="flex items-center space-x-2 border-b">
              <GrServices className="text-orange-500 text-xl" />
              <h3 className="text-lg font-bold">
                Custom Solutions
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-300">
                Looking for something more tailored? Our Custom Solutions offer personalized services to meet your unique automotive needs. From specialized reports to bespoke analysis, contact us to discuss how we can assist you.
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href="/contact" className="m-auto bg-white text-carbon">
                <GrContact className="inline-block mr-2" /> Contact Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
