type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Value and Impact",
    date: "10/10/25",
    description: `Value is a pretty important thing. It’s essentially what our world runs on 
    and oftentimes defines the work we do. If the work has no value, what are we even doing? And then impact.
    Everyone wants it but how is it made?`,
    image: "Images/blog1-img.jpg",
    imageAlt: "Image of someone giving a speech.",
    slug: "blogPage1",
  },
  {
    title: "Blog 2",
    date: "xx/xx/xx",
    description: "Here is a blog about me",
    image: "",
    imageAlt: "",
    slug: "blogPage2",
  },
];

const blogContainer = document.getElementById("blog-container");
appendBlogs();

function appendBlogs() {
  blogs.forEach((blog) => {
    const blogPostContainer = document.createElement("a");
    blogPostContainer.href = "blogs/" + blog.slug + ".html";
    blogPostContainer.className = "blog-post-container";
    const blogImage = document.createElement("div");
    const blogimage1 = document.createElement("img");
    blogimage1.src = blog.image;
    blogimage1.alt = blog.imageAlt;
    blogImage.append(blogimage1);
    const blogHeading = document.createElement("div");
    const blogHeadingText = document.createElement("h1");
    blogHeadingText.innerHTML = blog.title;
    blogHeading.append(blogHeadingText);
    const blogDescription = document.createElement("div");
    const blogDescriptionText = document.createElement("p");
    blogDescriptionText.innerHTML = blog.description;
    blogDescription.append(blogDescriptionText);
    blogPostContainer.append(blogImage);
    blogPostContainer.append(blogHeading);
    blogPostContainer.append(blogDescription);
    blogContainer?.append(blogPostContainer);
  });
}
