import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

function LinkHoverButton({ buttonText, hasArrow, fontSize }) {
  return (
    <Link
      href="/"
      className={` ${fontSize} flex items-center ${
        hasArrow ? "justify-between" : "justify-center"
      }  py-[10px] px-4 border-[1px] text-[#7b7e83] border-[#7b7e83] hover:bg-black hover:text-white`}
    >
      <p className={`${hasArrow ? "mr-3" : ""} text-inherit`}>{buttonText}</p>
      {hasArrow && <FaArrowRight size={12} color="#7b7e83" />}
    </Link>
  );
}

export { LinkHoverButton };
