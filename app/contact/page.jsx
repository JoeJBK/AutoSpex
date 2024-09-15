import { Input, Button, Textarea, Card, CardHeader, CardBody } from '@nextui-org/react';

export default function Page() {
  return (
    <div className="p-4">

      <Card className="max-w-lg w-full h-min m-auto">
        <CardHeader className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        </CardHeader>
        <CardBody>
          <p className="pb-4">
            Whether you have a question, feedback, or need a custom solution, feel free to reach out.
            Our team is here to help with all your needs. Let us know how we can assist you!
          </p>
          <form className="space-y-4">
            <Input
              label="Name"
              placeholder="Enter your name"
              fullWidth
              className="bg-off-white"
            />

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              fullWidth
              className="bg-off-white"
            />

            <Textarea
              label="Message"
              placeholder="Type your message here..."
              fullWidth
              minRows={5}
              className="bg-off-white"
            />

            <Button type="submit" className="w-full bg-orange text-white hover:bg-light-blue">
              Send Message
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
