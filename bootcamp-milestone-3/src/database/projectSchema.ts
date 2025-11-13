import mongoose, {Schema} from "mongoose";

type Project = {
  title: string;
  slug: string;
  image: string;
  image_alt: string;
  description: string;
  id: string;
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  id: {type:String, required:true}
}); 

// defining the collection and model
const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
