var blogs = [
    {
        title: "Value and Impact",
        date: "10/10/25",
        description: "Value is a pretty important thing. It\u2019s essentially what our world runs on \n    and oftentimes defines the work we do. If the work has no value, what are we even doing? And then impact.\n    Everyone wants it but how is it made?",
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
var blogContainer = document.getElementById("blog-container");
appendBlogs();
function appendBlogs() {
    blogs.forEach(function (blog) {
        var blogPostContainer = document.createElement("a");
        blogPostContainer.href = "blogs/" + blog.slug + ".html";
        blogPostContainer.className = "blog-post-container";
        var blogImage = document.createElement("div");
        var blogimage1 = document.createElement("img");
        blogimage1.src = blog.image;
        blogimage1.alt = blog.imageAlt;
        blogImage.append(blogimage1);
        var blogHeading = document.createElement("div");
        var blogHeadingText = document.createElement("h1");
        blogHeadingText.innerHTML = blog.title;
        blogHeading.append(blogHeadingText);
        var blogDescription = document.createElement("div");
        var blogDescriptionText = document.createElement("p");
        blogDescriptionText.innerHTML = blog.description;
        blogDescription.append(blogDescriptionText);
        blogPostContainer.append(blogImage);
        blogPostContainer.append(blogHeading);
        blogPostContainer.append(blogDescription);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(blogPostContainer);
    });
}
