import type { Application } from "@/entities/application/model";
import { errorLogger } from "@/shared/lib/error";
import OpenAI from "openai";

const client = (() => {
  try {
    return new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
  } catch (error) {
    errorLogger.error("sendPrompt", error);
  }
})();

export const sendPrompt = async ({
  jobTitle,
  company,
  skills,
  details,
}: Pick<Application, "jobTitle" | "company" | "skills" | "details">) => {
  if (!client) {
    errorLogger.error("sendPrompt", "OpenAI client initiation error");
    return;
  }
  try {
    // simulate long request
    await new Promise((res) => setTimeout(res, 2000));

    const response = await client.responses.create({
      model: "gpt-4.1-nano",
      instructions:
        "You are a professional IT career consultant with 20 years of experience.",
      input: `
      Write a professional cover letter from a job applicant to an employer based on the following data:
      - Job Title: ${jobTitle}
      - Company: ${company}
      - Skills: ${skills}
      - Additional details: ${details}
      The tone should be confident, respectful, and enthusiastic. Do not include placeholder names. Keep the letter under 300 words.

      The template should look like:

        Dear [Company] Team,

        I am writing to express my interest in the [JobTitle] position.

        My experience in the realm combined with my skills in [SkillsList] make me a strong candidate for this role.

        [AdditionalDetails]

        I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

        Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
    `,
      max_output_tokens: 1000,
    });
    return response.output_text;
  } catch (error) {
    errorLogger.error("sendPrompt", error);
  }
};
