import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Socials: FC<{ containerStyles: string }> = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href={"/"}>
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <TwitterIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
