import React from "react";

export interface CardProps {
  project: Project;
}

export interface Project {
  title: string;
  author: string;
  technologies: string[];
  description: string;
  github_link?: string;
  website?: string;
}

export interface TagProps {
  children: React.ReactNode;
}
