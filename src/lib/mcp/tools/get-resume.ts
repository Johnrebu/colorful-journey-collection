import { defineTool } from "@lovable.dev/mcp-js";
import {
  workExperiences,
  educationItems,
  skills,
  certifications,
} from "../../../components/resume/resumeData";

export default defineTool({
  name: "get_resume",
  title: "Get resume",
  description:
    "Get Johnson's public resume: work experience, education history, skills and certifications.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const resume = {
      workExperiences,
      education: educationItems,
      skills: skills.map((skill) => skill.name),
      certifications,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(resume, null, 2) }],
      structuredContent: resume,
    };
  },
});