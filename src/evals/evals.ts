//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const searchEval: EvalFunction = {
    name: "Search Tool Evaluation",
    description: "Tests the web search functionality of the 'search' tool",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Search for the top 3 coffee shops in Seattle and provide their details.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [searchEval]
};
  
export default config;
  
export const evals = [searchEval];