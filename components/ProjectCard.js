"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function ProjectCard({ name, githubUrl, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border-gray-200 rounded-lg bg-whitesmoke shadow-xl"
    >
      <img src={image} />
      <h3>{name}</h3>
      <div>
        <a href={githubUrl} target="_blank">
          <AiFillGithub />
        </a>
      </div>
    </motion.div>
  );
}
