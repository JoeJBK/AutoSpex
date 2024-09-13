import { Button, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react";


export default async function Home() {

  return (
    <div className="p-4">
      <Card className="max-w-lg w-full h-min m-auto">
        <CardHeader className="flex justify-center items-center">
          <i className="fa fa-car mr-3 text-2xl text-blue"></i>
          <h3 className="text-xl font-semibold">Discover Your Vehicle's True Value</h3>
        </CardHeader>

        <CardBody className="text-center">
          <p className="text-gray-700 mb-6">
            Get an accurate estimate of your car’s worth in just minutes. Enter your details and find out now!
          </p>
        </CardBody>

        <CardFooter className="flex justify-center">
          <Button color="primary" as={Link} href="/analysis">
            Find My Car's Value
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
