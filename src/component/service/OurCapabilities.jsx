import React from "react";
import LinkButton from "../ui/LinkButton";

const capabilities = [
  {
    title: "RAISE FUNDS",
    items: ["INVESTOR DECK", "STARTUP PITCH"],
  },
  {
    title: "SELL PRODUCTS",
    items: [
      "BUSINESS PROPOSAL",
      "COMPANY PRESENTATION",
      "PRODUCT PRESENTATION",
      "SALES DECK",
      "SERVICE DECK",
    ],
  },
  {
    title: "HIRE & MANAGE PEOPLE",
    items: [
      "BIG NEWS DECK",
      "BRANDED TEMPLATE",
      "ONBOARDING PRESENTATION",
      "POLICY DECK & PLAYBOOK",
      "PROGRESS REPORT",
    ],
  },
  {
    title: "ADDITIONAL",
    items: ["AGENCY", "BRANDING", "CORPORATE TRAINING", "REDESIGN", "REVIEW"],
  },
];

function OurCapabilities() {
  return (
    <section className="w-full bg-[#cdea68] min-h-screen px-6 md:px-12 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Side */}
        <div>
          <p>
            Our Capabilities:
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
          {capabilities.map((section, index) => (
            <div key={index}>
              <p className="flex items-center gap-2 mb-5">
                <span className="inline-block w-3 h-3 rounded-full bg-[#212121]"></span> {section.title}:
              </p>

              <div className="flex flex-col flex-wrap gap-3">
                {section.items.map((item, i) => (
                  <LinkButton label={item} key={i}/>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurCapabilities;