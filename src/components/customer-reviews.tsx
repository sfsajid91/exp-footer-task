import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const customerCompany = [
  {
    image: "/reviews/customer1.png",
    name: "Customers Say (9.5)",
  },
  {
    image: "/reviews/google.png",
    name: "Google (8.6)",
  },
  {
    image: "/reviews/trustpilot.png",
    name: "Trustpilot (9.0)",
  },
];

const customerReviews = [
  {
    name: "Bart, Luttenberg",
    date: "16-08-2023",
    review: "Excellent advice and installation friendly staff!",
    description:
      "Clear information, fast accurate competitive offer, professional and fast follow up, no surprises at the end and professional installation",
    image: "/reviews/cover.png",
    rating: 10,
  },
  {
    name: "Bart, Luttenberg",
    date: "16-08-2023",
    review: "Excellent advice and installation friendly staff!",
    description:
      "Clear information, fast accurate competitive offer, professional and fast follow up, no surprises at the end and professional installation",
    rating: 10,
  },

  {
    name: "Bart, Luttenberg",
    date: "16-08-2023",
    review: "Excellent advice and installation friendly staff!",
    description:
      "Clear information, fast accurate competitive offer, professional and fast follow up, no surprises at the end and professional installation",
    rating: 10,
  },
  {
    name: "Bart, Luttenberg",
    date: "16-08-2023",
    review: "Excellent advice and installation friendly staff!",
    description:
      "Clear information, fast accurate competitive offer, professional and fast follow up, no surprises at the end and professional installation",
    image: "/reviews/cover.png",
    rating: 10,
  },
  {
    name: "Bart, Luttenberg",
    date: "16-08-2023",
    review: "Excellent advice and installation friendly staff!",
    description:
      "Clear information, fast accurate competitive offer, professional and fast follow up, no surprises at the end and professional installation",
    rating: 10,
  },
  {
    name: "Bart, Luttenberg",
    date: "16-08-2023",
    review: "Excellent advice and installation friendly staff!",
    description:
      "Clear information, fast accurate competitive offer, professional and fast follow up, no surprises at the end and professional installation",
    rating: 10,
  },
];

const tabs = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "customers-tell",
    label: "Customers Tell",
  },
  {
    value: "google",
    label: "Google",
  },
  {
    value: "facebook",
    label: "Facebook",
  },
];
const paginationItems = [
  { page: 1, active: true },
  { page: 2, active: false },
  { page: 3, active: false },
];

export function TabsComponent() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="w-full flex max-w-fit mx-auto tracking-tight mb-12">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="w-full text-center max-w-fit px-4"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="all">
        <div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 tracking-tight space-y-4">
            {customerReviews.map((review, index) => (
              <div
                className="rounded-lg bg-[#F3F3F3] p-4 break-inside-avoid"
                key={index}
              >
                <h4>{review.name}</h4>
                <p className="text-[#B4B4B4]">{review.date}</p>
                <h5 className="my-4">{review.review}</h5>
                <p className="text-[#696969] mb-4">{review.description}</p>
                {review.image && (
                  <Image
                    src={review.image}
                    alt={`Review image of ${review.name}`}
                    width={400}
                    height={100}
                    className="rounded-lg mb-4 w-full"
                  />
                )}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <StarIcon className="size-5 fill-[#FFD451] text-[#FFD451] inline" />
                    <StarIcon className="size-5 fill-[#FFD451] text-[#FFD451] inline" />
                    <StarIcon className="size-5 fill-[#FFD451] text-[#FFD451] inline" />
                    <StarIcon className="size-5 fill-[#FFD451] text-[#FFD451] inline" />
                    <StarIcon className="size-5 fill-[#FFD451] text-[#FFD451] inline" />
                  </div>
                  <Button className="size-15 rounded-lg shadow-[0px_8px_44px_#37d15366] font-bold text-black text-3xl">
                    {review.rating}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-12">
            <Pagination>
              <PaginationContent>
                {paginationItems.map((item) => (
                  <PaginationItem key={item.page}>
                    <PaginationLink
                      className={`w-7 h-8 text-xl tracking-[-0.34px] font-['Aeonik-Regular',Helvetica] ${
                        item.active
                          ? "bg-primary text-black rounded-md"
                          : "text-[#7b7b7b]"
                      }`}
                      isActive={item.active}
                    >
                      {item.page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="customers-tell"></TabsContent>
      <TabsContent value="google"></TabsContent>
      <TabsContent value="facebook"></TabsContent> {/* Removed extra spaces */}
    </Tabs>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row lg:items-center justify-between gap-2">
          <h2 className="text-center md:text-left">
            3703 Customer Experiences
          </h2>

          <ul className="flex flex-col items-center md:flex-row gap-4">
            {customerCompany.map((company, index) => (
              <li key={index} className="flex items-center text-lg gap-2">
                <Image
                  src={company.image}
                  alt={company.name}
                  width={36}
                  height={36}
                />
                <p className="tracking-tighter">{company.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-8 bg-[#D6D6D6]" />

        <TabsComponent />
      </div>
    </section>
  );
}
