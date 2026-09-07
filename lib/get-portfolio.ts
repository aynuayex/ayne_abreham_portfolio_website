import { experiencesData, projectsData, skillsData } from "./data";

export interface PortfolioData {
  profile: {
    fullName: string;
    title: string;
    bio: string;
    avatarUrl: string | null;
    cvDriveUrl: string | null;
    githubUrl: string | null;
    linkedinUrl: string | null;
    email: string | null;
  } | null;
  projects: Array<{
    title: string;
    description: string;
    tags: readonly string[] | string[];
    imageUrl?: any;
    url?: string | null;
  }>;
  experiences: any[];
  skills: readonly string[] | string[];
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const adminApiUrl = process.env.ADMIN_API_URL || process.env.NEXT_PUBLIC_ADMIN_URL;

  if (adminApiUrl) {
    try {
      const res = await fetch(`${adminApiUrl}/api/public/portfolio`, {
        next: { revalidate: 60 },
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.profile) {
          return {
            profile: data.profile,
            projects: data.projects && data.projects.length > 0 ? data.projects : projectsData,
            experiences: data.experiences && data.experiences.length > 0 ? data.experiences : experiencesData,
            skills: data.skills && data.skills.length > 0 ? data.skills.map((s: any) => s.name) : skillsData,
          };
        }
      }
    } catch (error) {
      console.warn("Could not fetch remote portfolio data, falling back to static constants:", error);
    }
  }

  // Graceful fallback to static data
  return {
    profile: {
      fullName: "Ayne Abreham",
      title: "Full-Stack Developer",
      bio: "MERN full stack, Next.js and ReactNative(Expo)",
      avatarUrl: "https://i.stack.imgur.com/QwtoI.jpg?s=256&g=1",
      cvDriveUrl: process.env.NEXT_PUBLIC_CV_DRIVE_URL || null,
      githubUrl: "https://github.com/aynuayex",
      linkedinUrl: "https://www.linkedin.com/in/ayne-abreham/",
      email: "aynuman19@gmail.com",
    },
    projects: projectsData,
    experiences: experiencesData,
    skills: skillsData,
  };
}
