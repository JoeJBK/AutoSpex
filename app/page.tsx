import { appClient } from "@/lib/auth0";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Auth0Logo } from "@/components/auth0-logo";

import { Button, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react";


export default async function Home() {
  // const session = await appClient.getSession()

  return (
    <div className="">
      <Card className="max-w-lg w-full h-min m-auto">
        <CardHeader className="flex justify-center items-center">
          <i className="fa fa-car mr-3 text-2xl text-blue"></i>
          <h3 className="text-xl font-semibold">Compare a Vehicle</h3>
        </CardHeader>

        <CardBody className="text-center">
          <p className="text-gray-700 mb-6">
            Discover how a vehicle&apos;s previous listings compare to the current market. Click the button below to analyze any VIN and see trends, pricing, and more.
          </p>
        </CardBody>

        <CardFooter className="flex justify-center">
          <Button color="primary" as={Link} href="/analysis">
            Try Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
