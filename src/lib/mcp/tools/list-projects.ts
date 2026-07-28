import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { portfolioData } from "../../chat/knowledge";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Johnson's public portfolio projects with tech stack, description, live URL and GitHub link. Optionally filter by a search term.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional search term matched against project name, stack, description or keywords."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const term = query?.trim().toLowerCase();
    const projects = term
      ? portfolioData.projects.filter((project) =>
          [project.name, project.description, ...project.stack, ...project.keywords]
            .join(" ")
            .toLowerCase()
            .includes(term)
        )
      : portfolioData.projects;

    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { count: projects.length, projects },
    };
  },
});