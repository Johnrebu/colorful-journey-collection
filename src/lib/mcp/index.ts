import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProjectsTool from "./tools/list-projects";
import getResumeTool from "./tools/get-resume";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "johnson-portfolio-mcp",
  title: "Johnson Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Read-only tools for Johnson's public developer portfolio. Use `get_profile` for background, skills and availability, `list_projects` to browse or search projects, `get_resume` for work history and certifications, and `get_contact_info` for how to reach him.",
  tools: [getProfileTool, listProjectsTool, getResumeTool, getContactInfoTool],
});