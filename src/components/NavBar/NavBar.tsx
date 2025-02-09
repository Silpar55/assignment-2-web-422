/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name:Alejandro Silva Juarez Student ID:142655224 Date: 4/7/2024
 *
 *
 ********************************************************************************/
import Link from "next/link";
import NavTitle from "./NavTitle";
import NavForm from "./NavForm";
import NavDropDown from "./NavDropDown";

const Navbar = () => {
  return (
    <nav className="bg-custom-darkPurple p-3 px-5 ">
      <div className="flex justify-between items-center">
        <NavTitle />
        <div className="flex gap-5 items-center text-white text-xl">
          <Link
            href={"/"}
            className="flex gap-2 items-center text-custom-lightBlue  hover:bg-custom-mediumPurple hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M22 22L2 22"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M4 22V9.5"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M20 9.5V13.5M20 22V17.5"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                ></path>{" "}
              </g>
            </svg>
            <span>Home</span>
          </Link>
          <Link
            href={"/cities"}
            className="flex gap-2 items-center text-custom-lightBlue  hover:bg-custom-mediumPurple hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3.75 18C3.75 17.5858 3.41421 17.25 3 17.25C2.58579 17.25 2.25 17.5858 2.25 18H3.75ZM2.25 14C2.25 14.4142 2.58579 14.75 3 14.75C3.41421 14.75 3.75 14.4142 3.75 14H2.25ZM7 8.75C7.96401 8.75 8.61157 8.75159 9.09461 8.81654C9.55607 8.87858 9.75357 8.9858 9.88388 9.11612L10.9445 8.05546C10.4891 7.59999 9.92227 7.41432 9.29448 7.32991C8.68826 7.24841 7.92161 7.25 7 7.25V8.75ZM11.75 12C11.75 11.0784 11.7516 10.3117 11.6701 9.70552C11.5857 9.07773 11.4 8.51093 10.9445 8.05546L9.88388 9.11612C10.0142 9.24643 10.1214 9.44393 10.1835 9.90539C10.2484 10.3884 10.25 11.036 10.25 12H11.75ZM7 7.25C6.07839 7.25 5.31174 7.24841 4.70552 7.32991C4.07773 7.41432 3.51093 7.59999 3.05546 8.05546L4.11612 9.11612C4.24643 8.9858 4.44393 8.87858 4.90539 8.81654C5.38843 8.75159 6.03599 8.75 7 8.75V7.25ZM3.75 12C3.75 11.036 3.75159 10.3884 3.81654 9.90539C3.87858 9.44393 3.9858 9.24643 4.11612 9.11612L3.05546 8.05546C2.59999 8.51093 2.41432 9.07773 2.32991 9.70552C2.24841 10.3117 2.25 11.0784 2.25 12H3.75ZM3.75 22V18H2.25V22H3.75ZM3.75 14V12H2.25V14H3.75Z"
                  fill="#74a7fe"
                ></path>{" "}
                <path
                  d="M7 22V16C7 14.1144 7 13.1716 7.58579 12.5858C8.17157 12 9.11438 12 11 12H13C14.8856 12 15.8284 12 16.4142 12.5858C16.8858 13.0573 16.9777 13.7602 16.9957 15M17 22V19.25"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M21 7.77195C21 6.4311 21 5.76068 20.6439 5.24676C20.2877 4.73283 19.66 4.49743 18.4045 4.02663C15.9492 3.10591 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V11.9999M21 21.9999V11.9999"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M4 8V6.5C4 5.55719 4 5.08579 4.29289 4.79289C4.58579 4.5 5.05719 4.5 6 4.5H8C8.94281 4.5 9.41421 4.5 9.70711 4.79289C10 5.08579 10 5.55719 10 6.5V8"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M7 4V2"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M22 22L2 22"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M10 15H10.5M14 15H12.5"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M10 18H14"
                  stroke="#74a7fe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
            <span>All Cities</span>
          </Link>
          <NavDropDown />
        </div>
        <NavForm />
      </div>
    </nav>
  );
};

export default Navbar;
