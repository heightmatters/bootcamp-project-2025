import { RandomUUIDOptions } from "crypto";
import { randomUUID } from "crypto";

export interface Portfolio {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  slug: string;
  id: string;
}

const projects: Portfolio[] = [
  {
    title: "The Hack for Impact Starter Pack",
    image: "",
    imageAlt: "",
    description: "My personal website that you are currently viewing!",
    slug: "/",
    id: crypto.randomUUID(),
  },
  {
    title: "Project 2",
    image: "",
    imageAlt: "",
    description: "",
    slug: "",
    id: crypto.randomUUID(),
  },
  {
    title: "Project 3",
    image: "",
    imageAlt: "",
    description: "",
    slug: "",
    id: crypto.randomUUID(),
  },
  {
    title: "Project 4",
    image: "",
    imageAlt: "",
    description: "",
    slug: "",
    id: crypto.randomUUID(),
  },
  {
    title: "Project 5",
    image: "",
    imageAlt: "",
    description: "",
    slug: "",
    id: crypto.randomUUID(),
  },
];

export default projects;
