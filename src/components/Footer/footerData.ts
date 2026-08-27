export interface FooterLink {
  title: string;
  link: string;
  isSpecial?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export const FOOTER_DATA: FooterSection[] = [
  {
    id: "information",
    title: "Information",
    links: [
      { title: "About Us", link: "/about-us" },
      { title: "About Zip", link: "/about-zip" },
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Search", link: "/search" },
      { title: "Terms", link: "/terms" },
      { title: "Orders and Returns", link: "/orders-returns" },
      { title: "Contact Us", link: "/contact-us" },
      { title: "Advanced Search", link: "/advanced-search" },
      { title: "Newsletter Subscription", link: "/newsletter" },
    ],
  },
  {
    id: "pc-parts",
    title: "PC Parts",
    links: [
      { title: "CPUS", link: "/catalog?category=cpu" },
      { title: "Add On Cards", link: "/catalog?category=cards" },
      { title: "Hard Drives (Internal)", link: "/catalog?category=storage" },
      { title: "Graphic Cards", link: "/catalog?category=gpu" },
      { title: "Keyboards / Mice", link: "/catalog?category=peripherals" },
      {
        title: "Cases / Power Supplies / Cooling",
        link: "/catalog?category=cooling",
      },
      { title: "RAM (Memory)", link: "/catalog?category=ram" },
      { title: "Software", link: "/catalog?category=software" },
      { title: "Speakers / Headsets", link: "/catalog?category=audio" },
      { title: "Motherboards", link: "/catalog?category=motherboards" },
    ],
  },
  {
    id: "desktop-pcs",
    title: "Desktop PCs",
    links: [
      { title: "Custom PCs", link: "/catalog?category=Custom+Desktop" },
      { title: "Servers", link: "/catalog?category=servers" },
      { title: "MSI All-In-One PCs", link: "/catalog?category=aio" },
      { title: "HP/Compaq PCs", link: "/catalog?category=hp-pcs" },
      { title: "ASUS PCs", link: "/catalog?category=asus-pcs" },
      { title: "Tecs PCs", link: "/catalog?category=tecs-pcs" },
    ],
  },
  {
    id: "laptops",
    title: "Laptops",
    links: [
      { title: "Everyday Use Notebooks", link: "/catalog?category=Laptop" },
      {
        title: "MSI Workstation Series",
        link: "/catalog?category=workstations",
      },
      { title: "MSI Prestige Series", link: "/catalog?category=prestige" },
      { title: "Tablets and Pads", link: "/catalog?category=tablets" },
      { title: "Netbooks", link: "/catalog?category=netbooks" },
      {
        title: "Infinity Gaming Notebooks",
        link: "/catalog?category=gaming-laptops",
      },
    ],
  },
];
