import { links } from "@/mock/link";
import Link from "next/link";
import { FC } from "react";

const Nav: FC<{
  containerStyles: string;
  linkStyles: string;
}> = (props) => {
  const { containerStyles, linkStyles } = props;

  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${linkStyles}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathName}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
