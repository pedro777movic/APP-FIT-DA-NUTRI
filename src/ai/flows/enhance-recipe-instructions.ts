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
    .describe('Os passos de preparação da receita a serem aprimorados.'),
});
export type EnhanceRecipeInstructionsInput = z.infer<typeof EnhanceRecipeInstructionsInputSchema>;

const EnhanceRecipeInstructionsOutputSchema = z.object({
  enhancedInstructions: z
    .string()
    .describe('Os passos de preparação da receita detalhados e descritivos.'),
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
  prompt: `Você é um especialista em aprimorar receitas. Sua tarefa é expandir os passos de preparação da receita fornecidos em instruções mais detalhadas e descritivas, sem alterar o significado original ou os ingredientes. Mantenha uma linguagem clara, didática e fluida.

Instruções Originais: {{{instructions}}}

Instruções Aprimoradas:`,
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
