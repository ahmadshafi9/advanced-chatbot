import { tool } from 'ai';
import { z } from 'zod';
 
export const search_web = tool({
  // TODO: Add a clear description for the AI to understand when to use this tool
  description: 'use this tool when you need to search the web to find revelant information or up to date information',
 
  // TODO: Define the input schema using Zod
  // The tool needs a 'city' parameter (string)
  inputSchema: z.object({
    search_terms: z.string().describe('The search terms for web search'),
  }),
 
  // TODO: Implement the execute function
  // This function runs when the AI calls the tool
  execute: async ({ search_terms }) => {
    // Implementation goes here
    const query = search_terms;

  const params = new URLSearchParams({
    q: query,
    count: "3"
  });

  const res = await fetch(
    `https://api.search.brave.com/res/v1/web/search?${params}`,
    {
      headers: {
        Accept: "application/json",
        "X-Subscription-Token": process.env.BRAVE_API_KEY!
      }
    }
  );

  const json = await res.json();
  return JSON.stringify(json);
  },
});

