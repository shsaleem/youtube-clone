import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPaperclip } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { BiLike, BiTimeFive } from "react-icons/bi";
import { RiYoutubeLine, RiVideoUploadLine } from "react-icons/ri";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <AiFillHome size={22} />,
  },
  {
    id: 2,
    url: "/explore",
    text: "Explore",
    icon: <MdOutlineExplore size={22} />,
  },
  {
    id: 3,
    url: "/upload",
    text: "Upload",
    icon: <RiVideoUploadLine size={22} />,
  },
  {
    id: 4,
    url: "/",
    text: "Shorts",
    icon: <FaPaperclip size={22} />,
  },
  {
    id: 5,
    url: "/",
    text: "Subscriptions",
    icon: <MdOutlineSubscriptions size={22} />,
  },
];

export const navLinks = [
  {
    id: 1,
    url: "/",
    text: "Library",
    icon: <MdOutlineVideoLibrary size={22} />,
  },
  {
    id: 2,
    url: "/",
    text: "History",
    icon: <GrHistory size={22} />,
  },
  {
    id: 3,
    url: "/uploaded-videos",
    text: "Your Videos",
    icon: <RiYoutubeLine size={22} />,
  },
  {
    id: 4,
    url: "/",
    text: "Watch Later",
    icon: <BiTimeFive size={22} />,
  },
  {
    id: 5,
    url: "/",
    text: "Liked Videos",
    icon: <BiLike size={22} />,
  },
];
