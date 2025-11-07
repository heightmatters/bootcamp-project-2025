import { RandomUUIDOptions } from "crypto";
import { randomUUID } from "crypto";

export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  id: string;
}

const blogs: Blog[] = [
  {
    title: "Value and Impact",
    date: "10/10/25",
    description: `Value is a pretty important thing. It’s essentially what our world runs on 
    and oftentimes defines the work we do. If the work has no value, what are we even doing? And then impact.
    Everyone wants it but how is it made?`,
    image: "/blog1-img.jpg",
    imageAlt: "Image of someone giving a speech.",
    slug: "/Blog/Page1",
    id: randomUUID(),
  },
  {
    title: "Blog 2",
    date: "xx/xx/xx",
    description: "Here is a blog about me",
    image: "/blog2.jpg",
    imageAlt: "",
    slug: "/Blog/Page2",
    id: randomUUID(),
  },
];

export default blogs;
