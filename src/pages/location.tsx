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
import Image from "next/image";

interface Give {
  bank: string;
  name: string;
  acc_no: string;
  qr: string;
}

interface Service {
  name: string;
  address: string;
  mapUrl: string;
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
  const tabs = [
    {
      label: "Church",
      content: (
        <>
          <div>{items.address}</div>
          <iframe
            src={items.mapUrl}
            width="200"
            height="200"
            style={{ border: 0, margin: "10px auto" }}
            loading="lazy"
          ></iframe>
        </>
      ),
    },
    {
      label: "Office",
      content: (
        <>
          <div>{items.address}</div>
          <div className="mt-2">{items.contact}</div>
          <div className="mt-2">{items.email}</div>
        </>
      ),
    },
    {
      label: "Service",
      content: (
        <>
          <div>{items.time}</div>
          <div className="mt-2">{items.venue}</div>
          <Link
            size="sm"
            isExternal
            href={items.youtube}
            showAnchorIcon
            className="mt-2"
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
          <div className="mt-2">{items.give.name}</div>
          <div className="mt-2">{items.give.acc_no}</div>
          <Image
            src={items.give.qr}
            alt="QR Code"
            width={296}
            height={296}
            className="mt-2"
          />
        </>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs items={tabs} color="primary">
        {tabs.map((tab) => {
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
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 3:00pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
        },
        {
          name: "General Service 1",
          address:
            "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
        },
        {
          name: "General Service 2",
          address:
            "No. 1, Jalan 1/116B, Kuchai Entrepreneurs Park, Off Jalan Kuchai Lama, 58200 Kuala Lumpur",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
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
          youtube: "https://www.youtube.com/@fgacyc",
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
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
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
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
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
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
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
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
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
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0155340709653!2d101.6739822!3d3.0905232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a471b85a537%3A0x22b578184c5280ab!2sFGA%20Chinese%20Youth%20Church%20(FGA%20CYC)!5e0!3m2!1sen!2smy!4v1693384531044!5m2!1sen!2smy",
          contact: "012-3456789",
          email: "fgacyc.official@gmail.com",
          time: "Saturday 5:30pm",
          venue: "L5",
          give: {
            bank: "Maybank",
            name: "Full Gospel Assembly Berhad",
            acc_no: "0-14011-230146",
            qr: "/icons/qr.svg",
          },
          youtube: "https://www.youtube.com/@fgacyc",
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
              className="font-semibold text-black"
            >
              <div className="flex font-normal lg:flex-col lg:items-center">
                {location.serviceTime.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="mr-7 flex flex-col items-center lg:mb-7 lg:mr-0"
                    >
                      <div className="mb-5 font-semibold text-[#09203f]">{service.name}</div>
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
