import React from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface AlbumProps {
  title: string;
  imgPath: string;
}

export default function Album(props: AlbumProps) {
  return (
    <>
      <Card className="border-1 border-white bg-transparent py-4">
        <CardHeader className="flex-col items-center px-4 pb-0 pt-2">
          {/* <p className="text-tiny font-bold uppercase">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small> */}
          <h4 className="text-large font-bold text-white">{props.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="rounded-xl object-cover"
            src={"/images/" + props.imgPath + ".png"}
            width={300}
          />
          <Button radius="full" className="mt-3">
            Learn More
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
