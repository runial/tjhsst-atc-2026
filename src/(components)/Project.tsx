export type Project = {
  name: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
};

interface ProjectProps { project: Project; }

export function ProjectBox({ project }: ProjectProps) {
  const { name, description, link, image, imageAlt } = project;
  return (
    <div className="flex-1 hover-grow">
      <a href={link} className="flex flex-col">
        <img className="object-cover w-full h-110" src={image} alt={imageAlt} />
        <h2 className="mt-8">{name}</h2>
        <p className="mt-2">{description}</p>
      </a>
    </div>
  );
}