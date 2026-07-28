import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioData } from "../../chat/knowledge";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get how to reach Johnson: availability status, location preference, expected response time and the contact page URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      ...portfolioData.availability,
      contact_page: "https://colorful-journey-collection.lovable.app/contact",
      preferred_channel: "Contact form on the portfolio website",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});