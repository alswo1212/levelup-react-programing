import Link from "next/link";

type ButtonLinkProps = {
  text: string;
  url: string;
};

const ButtonLink = ({ text, url }: ButtonLinkProps) => {
  return (
    <Link href={url}>
      <button className="outline p-2 hover:bg-gray-300">{text}</button>
    </Link>
  );
};

export default ButtonLink;
