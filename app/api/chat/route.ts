import { convertToModelMessages, streamText, UIMessage, stepCountIs } from 'ai';
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { search_web } from "./tools";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openrouter("bytedance-seed/seed-1.6-flash"),
    system: 'You are a helpful assistant that gives clear and concise answers in english.',
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools: { search_web },
  });

  return result.toUIMessageStreamResponse();
}