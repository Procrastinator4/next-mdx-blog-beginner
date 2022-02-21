import Link from "next/link";
import React from "react";

export default function SiteHeader() {
  return (
    <nav className="bg-blue-500 text-blue-100 px-8 py-3">
      <div className="max-w-7xl  mx-auto md:flex justify-between ">
        {/* left side logo  */}
        <Logo />
        {/* right side navigation  */}
        <SiteNav />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/">
      <a className="inline-block relative py-2 px-4">
        <span className="block absolute inset-0 bg-white rounded-lg transform -skew-x-12"></span>
        <span className="block relative font-semibold text-blue-800">DigitalOcean App Platform Resources</span>
      </a>
    </Link>
  );
}
function SiteNav() {
  return (
    <div className="hidden  md:flex items-center ">
      <a href="#" className="font-semibold py-2 px-3 hover:text-white">
        Docs
      </a>
      <a href="#" className="font-semibold py-2 px-3 hover:text-white">
        Apps Dashboard
      </a>
    </div>
  );
}
