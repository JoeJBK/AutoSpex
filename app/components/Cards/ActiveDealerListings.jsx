import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image, Link, CardFooter, Button, Spinner } from "@nextui-org/react";
import { fetchListings } from "../../lib/api";


export default function ActiveDealerListings({
  year,
  make,
  model,
  trim
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchListings(year, make, model, trim);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [year, make, model, trim]);

  return (
    <Card>
      <CardHeader className="flex flex-wrap justify-between">
        <h2 className="text-xl font-semibold">Dealer Listings</h2>
        <span className="text-sm text-gray">
          {data?.listings?.length > 0 && data?.listings?.length + ' found'}
        </span>
      </CardHeader>
      <CardBody className="gap-4 w-full flex-row flex-wrap justify-around">
        {
          loading ? <Spinner /> :
            (data?.listings?.map((listing, index) => {
              return (
                <Card key={index} className="col-span-12 sm:col-span-4 max-h-[300px] max-w-[450px] flex-grow">
                  <CardHeader className="bg-black/75 absolute z-10 top-0 flex-col !items-start">
                    <h4 className="text-white font-medium text-large">{listing.heading}</h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={listing.media?.photo_links[0]}
                  />
                  <CardFooter className="absolute bg-black/75 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div className="flex flex-grow gap-2 items-center">
                      <div className="flex flex-col">
                        <p className="text-tiny text-white">${Number(listing.price).toLocaleString()}</p>
                        <p className="text-tiny text-white">{Number(listing.miles).toLocaleString()} Miles</p>
                      </div>
                    </div>
                    <Button className="bg-blue" radius="full" size="sm">
                      <Link href={listing.vdp_url} className="text-white">
                        Visit Dealer Site
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            }) ||
              (
                <>
                  No Listings Found
                </>
              ))
        }
      </CardBody>
    </Card>
  );
}