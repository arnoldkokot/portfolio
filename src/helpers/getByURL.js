import projects from "../assets/projects.json";
import kebabCase from "./kebabCase";

const getByURL = (url) =>
  projects.find((project) => kebabCase(project.title) === url);

export default getByURL;
