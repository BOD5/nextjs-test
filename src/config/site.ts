export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Add Tool",
      href: "/add-new",
    },
    {
      title: "Terms",
      href: "/terms",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
