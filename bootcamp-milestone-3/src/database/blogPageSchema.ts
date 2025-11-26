import mongoose, { Schema } from "mongoose";

export type IComment = {
  _id: String;
  user: String;
  comment: String;
  time: Date;
};

type Section = {
  id: string;
  heading: string;
  body: string;
};

type BlogPage = {
  slug: string;
  title: string;
  date: Date;
  imageUrl: string;
  sections: Section[];
  comments: IComment[];
};

const blogPageSchema = new Schema<BlogPage>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  imageUrl: { type: String },
  sections: [
    {
      id: { type: String },
      heading: { type: String },
      body: [String],
    },
  ],
  comments: {
    type: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },
});

const BlogPage =
  mongoose.models.BlogPage || mongoose.model("BlogPage", blogPageSchema);

export default BlogPage;
