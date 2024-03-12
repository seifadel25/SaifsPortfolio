import Heading from "./Heading";
import data from "../../data/contacts";
import Link from "next/link";
import SectionW from "./SectionW";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Contacts = () => {
  return (
    <SectionW>
      <Heading>Contacts</Heading>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
        {data.map((contact) => (
          <Link
            href={contact.link}
            key={contact.id}
            target="_blank"
            className="flex items-center space-x-2 bg-white dark:bg-zinc-800 px-3 py-2 rounded-lg"
          >
            {contact.name === "github" && (
              <FaGithub size={20} className="text-black dark:text-violet-600" />
            )}
            {contact.name === "linkedin" && (
              <FaLinkedin
                size={20}
                className="text-blue-800 dark:text-sky-500 "
              />
            )}
            {contact.name === "instagram" && (
              <FaInstagram
                size={20}
                className="text-violet-800 dark:text-indigo-500"
              />
            )}
            {contact.name === "behance" && (
              <FaBehanceSquare
                size={20}
                className="text-blue-800 dark:text-blue-600"
              />
            )}
            {contact.name === "email" && (
              <MdEmail size={20} className="text-red-800 dark:text-red-500" />
            )}
            {contact.name === "cv" && (
              <FaRegUserCircle
                size={20}
                className="text-orange-900 dark:text-orange-500"
              />
            )}
            <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </SectionW>
  );
};
export default Contacts;
