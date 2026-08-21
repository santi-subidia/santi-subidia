import React from "react";
import {
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiAndroid,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGithubactions,
} from "react-icons/si";
import { FaLinkedin, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiGithub className={className} />
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <FaLinkedin className={`${className} text-[#0A66C2]`} />
);

export const CsharpIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <TbBrandCSharp className={`${className} text-[#9B4993]`} />
);

export const DotNetIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiDotnet className={`${className} text-[#512BD4]`} />
);

export const AndroidIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiAndroid className={`${className} text-[#3DDC84]`} />
);

export const JavaIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <FaJava className={`${className} text-[#EA2D2E]`} />
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiReact className={`${className} text-[#61DAFB]`} />
);

export const NextjsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiNextdotjs className={`${className} text-zinc-900 dark:text-white`} />
);

export const NodejsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiNodedotjs className={`${className} text-[#5FA04E]`} />
);

export const ExpressIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiExpress className={`${className} text-zinc-900 dark:text-white`} />
);

export const TypescriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiTypescript className={`${className} text-[#3178C6]`} />
);

export const JavascriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiJavascript className={`${className} text-[#F7DF1E]`} />
);

export const Html5Icon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiHtml5 className={`${className} text-[#E34F26]`} />
);

export const CssIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiCss className={`${className} text-[#1572B6]`} />
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiTailwindcss className={`${className} text-[#38BDF8]`} />
);

export const MysqlIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiMysql className={`${className} text-[#4479A1]`} />
);

export const PostgresqlIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiPostgresql className={`${className} text-[#4169E1]`} />
);

export const SqliteIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiSqlite className={`${className} text-[#003B57] dark:text-[#38BDF8]`} />
);

export const DockerIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiDocker className={`${className} text-[#2496ED]`} />
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiGit className={`${className} text-[#F05032]`} />
);

export const GithubActionsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <SiGithubactions className={`${className} text-[#2088FF]`} />
);





