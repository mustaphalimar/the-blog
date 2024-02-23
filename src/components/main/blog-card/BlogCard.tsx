import Image from "next/image";

interface Props {
  image?: string;
  author?: string;
  date?: Date;
  title?: string;
  content?: string;
  tags?: string;
  align?: "row" | "col";
  size?: "sm" | "md" | "lg";
}

const BlogCard: React.FC<Props> = (props) => {
  const size =
    props.size === "sm" ? "500px" : props.size === "md" ? "700px" : "100%";

  return (
    <div className={`w-${size}`}>
      <div className="flex gap-3">
        <Image width={300} height={300} alt="image" src="/images/desktop.png" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1  text-textPurple">
            <p>{props.author}</p>
            <span>•</span>
            <p>{props.date?.toDateString()}</p>
          </div>
          <p className="text-xl font-bold">{props.title}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
