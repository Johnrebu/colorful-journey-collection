import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioData } from "../../chat/knowledge";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Johnson's public profile: name, role, location, career background, education, skills, availability and interests.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const { profile, experience, education, skills, availability, interests } = portfolioData;
    const summary = {
      profile,
      experience,
      education,
      skills,
      availability,
      interests,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: summary,
    };
  },
});