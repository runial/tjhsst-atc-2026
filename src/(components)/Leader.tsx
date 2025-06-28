export type Leader = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

interface LeaderProps {
  leader: Leader;
  className?: string;
}

export function LeaderBox({ leader, className }: LeaderProps) {
  const { name, role, image, imageAlt } = leader;
  return (
    <div className="">
      <img className={`object-cover h-84 rounded-xl w-68 min-w-68 max-w-68 ${className}`} src={image} alt={imageAlt} loading="lazy" />
      <h2 className="mt-5">{name}</h2>
      <p>{role}</p>
    </div>
  );
}