'use server';

/**
 * @fileOverview An AI agent that enhances recipe instructions.
 *
 * - enhanceRecipeInstructions - A function that enhances succinct recipe preparation steps into more detailed instructions.
 * - EnhanceRecipeInstructionsInput - The input type for the enhanceRecipeInstructions function.
 * - EnhanceRecipeInstructionsOutput - The return type for the enhanceRecipeInstructions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceRecipeInstructionsInputSchema = z.object({
  instructions: z
    .string()
    .describe('The succinct recipe preparation steps to be enhanced.'),
});
export type EnhanceRecipeInstructionsInput = z.infer<typeof EnhanceRecipeInstructionsInputSchema>;

const EnhanceRecipeInstructionsOutputSchema = z.object({
  enhancedInstructions: z
    .string()
    .describe('The detailed and descriptive recipe preparation steps.'),
});
export type EnhanceRecipeInstructionsOutput = z.infer<typeof EnhanceRecipeInstructionsOutputSchema>;

export async function enhanceRecipeInstructions(
  input: EnhanceRecipeInstructionsInput
): Promise<EnhanceRecipeInstructionsOutput> {
  return enhanceRecipeInstructionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceRecipeInstructionsPrompt',
  input: {schema: EnhanceRecipeInstructionsInputSchema},
  output: {schema: EnhanceRecipeInstructionsOutputSchema},
  prompt: `You are an expert recipe enhancer. Your task is to expand the given recipe preparation steps into more detailed and descriptive instructions, without altering the original meaning or ingredients. Maintain a clear, didactic, and fluid language.

Original Instructions: {{{instructions}}}

Enhanced Instructions:`,
});

const enhanceRecipeInstructionsFlow = ai.defineFlow(
  {
    name: 'enhanceRecipeInstructionsFlow',
    inputSchema: EnhanceRecipeInstructionsInputSchema,
    outputSchema: EnhanceRecipeInstructionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
