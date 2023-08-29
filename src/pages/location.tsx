import React from "react";
import {
  Accordion,
  AccordionItem,
  Tabs,
  Tab,
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";

interface Give {
  bank: string;
  name: string;
  acc_no: string;
  qr: string;
}

interface Service {
  name: string;
  address: string;
  contact: string;
  email: string;
  time: string;
  venue: string;
  give: Give;
  youtube: string;
}

interface Location {
  name: string;
  serviceTime: Service[];
}

interface ServiceCardProps {
  items: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ items }) => {
  let tabs = [
    {
      label: "Church",
      content: items.address,
    },
    {
      label: "Office",
      content: (
        <>
          <div>{items.address}</div>
          <div>{items.contact}</div>
          <div>{items.email}</div>
        </>
      ),
    },
    {
      label: "Service",
      content: (
        <>
          <div>{items.time}</div>
          <div>{items.venue}</div>
          <Link
            size="sm"
            isExternal
            href={items.youtube}
            showAnchorIcon
          >
            YouTube Channel
          </Link>
        </>
      ),
    },
    {
      label: "Give",
      content: (
        <>
          <div>{items.give.bank}</div>
          <div>{items.give.name}</div>
          <div>{items.give.acc_no}</div>
          <img src={items.give.qr} alt="QR Code" />
        </>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs items={tabs}>
        {tabs.map((tab, index) => {
          return (
            <Tab key={tab.label.toLowerCase()} title={tab.label}>
              <Card className="w-[281px]">
                <CardBody>{tab.content}</CardBody>
              </Card>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default function Location() {
  const locations = [
    {
      name: "Kuchai Lama",
      serviceTime: [
        {
          name: "Young Warrior",
          address:
            "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saterday 3:00pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
        },
        {
          name: "General Service 1",
          address:
            "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saterday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
        },
        {
          name: "General Service 2",
          address:
            "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Sunday 1:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
        },
      ],
    },
    {
      name: "Kepong",
      serviceTime: [
        {
            name: "General Service",
            address:
              "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
            contact: "012-3456789",
            email: "fgacyc.official@gmail.com",
            time: "Saterday 5:30pm",
            venue: "L5",
            give: {
              bank: "Maybank",
              name: "Full Gospel Assembly Berhad",
              acc_no: "0-14011-230146",
              qr: "/icons/qr.svg",
            },
            youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
          },
      ],
    },
    {
      name: "Seremban",
      serviceTime: [
        {
            name: "General Service",
            address:
              "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
            contact: "012-3456789",
            email: "fgacyc.official@gmail.com",
            time: "Saterday 5:30pm",
            venue: "L5",
            give: {
              bank: "Maybank",
              name: "Full Gospel Assembly Berhad",
              acc_no: "0-14011-230146",
              qr: "/icons/qr.svg",
            },
            youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
          },
      ],
    },
    {
      name: "Setapak",
      serviceTime: [
        {
            name: "General Service",
            address:
              "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
            contact: "012-3456789",
            email: "fgacyc.official@gmail.com",
            time: "Saterday 5:30pm",
            venue: "L5",
            give: {
              bank: "Maybank",
              name: "Full Gospel Assembly Berhad",
              acc_no: "0-14011-230146",
              qr: "/icons/qr.svg",
            },
            youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
          },
      ],
    },
    {
      name: "Sungai Long",
      serviceTime: [
        {
            name: "General Service",
            address:
              "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
            contact: "012-3456789",
            email: "fgacyc.official@gmail.com",
            time: "Saterday 5:30pm",
            venue: "L5",
            give: {
              bank: "Maybank",
              name: "Full Gospel Assembly Berhad",
              acc_no: "0-14011-230146",
              qr: "/icons/qr.svg",
            },
            youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
          },
      ],
    },
    {
      name: "USJ",
      serviceTime: [
        {
            name: "General Service",
            address:
              "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
            contact: "012-3456789",
            email: "fgacyc.official@gmail.com",
            time: "Saterday 5:30pm",
            venue: "L5",
            give: {
              bank: "Maybank",
              name: "Full Gospel Assembly Berhad",
              acc_no: "0-14011-230146",
              qr: "/icons/qr.svg",
            },
            youtube: "https://www.youtube.com/channel/UC9Q4Q4Z0Z0YX6Z9Z3Z2Z9ZQ",
          },
      ],
    },
  ];

  return (
    <div className="h-min-screen m-10 flex flex-col sm:mx-5">
      <div className="mb-3 text-3xl">Locations</div>
      <div className="text-sm">Find CYC churches near you</div>
      <Accordion
        defaultExpandedKeys={["0"]}
        selectionMode="multiple"
        variant="shadow"
        className="mt-7"
      >
        {locations.map((location, index) => {
          return (
            <AccordionItem
              key={index}
              aria-label={location.name}
              title={location.name}
              className="text-black font-semibold"
            >
              <div className="flex lg:flex-col lg:items-center font-normal">
                {location.serviceTime.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="mr-7 flex flex-col lg:mb-7"
                    >
                      <div className="mb-3">{service.name}</div>
                      <ServiceCard items={service} />
                    </div>
                  );
                })}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
