import lightning1 from "@/app/assets/lightning1.svg";
import lightning2 from "@/app/assets/lightning2.svg";
import ListIcon from "@/components/icons/list";
import RightArrowIcon from "@/components/icons/right-arrow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const locations = [
  { name: "Nederweert", href: "/" },
  { name: "Breda", href: "/" },
  { name: "Den Bosch", href: "/" },
  { name: "Steenwijk", href: "/" },
  { name: "Sittard", href: "/" },
];

const qualityMarks1 = [
  { name: "installq.svg", path: "/quality/installq.svg" },
  { name: "zrn.svg", path: "/quality/zrn.svg" },
  { name: "techniek.svg", path: "/quality/techniek.svg" },
  { name: "bbl.svg", path: "/quality/bbl.svg" },
  { name: "storage.svg", path: "/quality/storage.svg" },
  { name: "holland.svg", path: "/quality/holland.svg" },
];

const qualityMarks2 = [
  { name: "fd2.svg", path: "/quality/fd2.svg" },
  { name: "fd.svg", path: "/quality/fd.svg" },
];

export default function Page() {
  return (
    <>
      <header className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio ut
        vero repellendus quaerat eum fugit et, amet pariatur natus asperiores
        praesentium doloremque! Vero deleniti illum minus, itaque nisi
        doloribus.
      </header>
      <footer className="bg-[#07220C] text-white relative overflow-hidden">
        {/* Background Image */}
        <Image
          src={lightning1}
          alt="Background Lightning"
          className="absolute lg:-inset-y-4 md:top-0 lg:h-full object-contain mix-blend-overlay -left-20"
        />
        <Image
          src={lightning2}
          alt="Background Lightning"
          className="absolute -bottom-10 object-contain -right-12 mix-blend-overlay"
        />
        <div className="container mx-auto py-10 px-4 space-y-12 relative z-10">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-center">
            <div>
              <h2 className="text-5xl font-medium mb-2 relative w-fit">
                Stay{" "}
                <span className="relative">
                  informed.
                  {/* Underline */}
                  <div className="absolute h-[5px] bottom-1 right-0 bg-primary rounded-[20px] w-[103%]"></div>
                </span>
              </h2>
              <p className="text-sm leading-relaxed max-w-md text-[#959595] self-stretch">
                Enter your email address and stay informed of the latest news,
                developments and useful tips for your wallet, among other
                things.
              </p>
            </div>

            {/* inputs */}
            <div className="space-y-2 max-w-sm w-full">
              <Input
                type="text"
                placeholder="First name*"
                className="w-full bg-white text-third placeholder:text-third"
              />
              <div className="flex items-center gap-1">
                <Input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-white text-third placeholder:text-third"
                />
                <Button className="text-white rounded-sm">
                  <RightArrowIcon className="stroke-white" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="bg-[#063A0C]" />

          {/* Footer Links Section */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Locations Column */}
            <div>
              <h3 className="text-xl font-medium mb-6">Locations</h3>
              <div className="space-y-1">
                <div>
                  <a href="#" className="block py-1 hover:text-green-400">
                    Charging Stations BV
                  </a>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                {locations.map((location) => (
                  <div key={location.name} className="flex items-center gap-2">
                    <ListIcon />
                    <Link href="#" className="hover:text-green-400">
                      {location.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-medium mb-6">Contact</h3>
              <p className="mb-3">Direct contact</p>
              <div className="mb-6">
                <p className="text-2xl font-medium">0486 - 831400</p>
                <p className="text-xs text-green-500">
                  Available from 9:00 to 17:00
                </p>
              </div>
            </div>

            {/* Discover Us Column */}
            <div>
              <h3 className="text-xl font-medium mb-6">Discover Us</h3>
              <ul className="space-y-3">
                {[
                  "About us",
                  "Knowledge Center",
                  "Knowledge articles",
                  "Service plan",
                  "Working at",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-green-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality Marks Column */}
            <div className="lg:col-span-2 md:col-span-3">
              <h3 className="text-xl font-medium mb-6">Quality Marks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Placeholder for quality mark logos */}
                {qualityMarks1.map((mark) => (
                  <div key={mark.name} className="h-14 w-24">
                    <Image
                      src={mark.path}
                      alt={mark.name}
                      width={96}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Separator className="mb-6 bg-[#D9D9D9]" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {qualityMarks2.map((mark) => (
                    <div key={mark.name} className="h-14 w-24">
                      <Image
                        src={mark.path}
                        alt={mark.name}
                        width={96}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center pt-4 text-sm text-[#959595]">
            © Copyright {new Date().getFullYear()} Charging station. All rights
            reserved
          </div>
        </div>
      </footer>
    </>
  );
}
