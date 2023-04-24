import { answering } from "@/utils/ai/answering";
import { isWMOMantelzorgRelatedQuestion } from "@/utils/ai/is-wmo-mantelzorg-related-question";
import { NextApiHandler } from "next/dist/shared/lib/utils";

export const handleUserMessage: NextApiHandler = async (req, res) => {
  const { userContent } = req.body;

  const isRelatedQuestion = await isWMOMantelzorgRelatedQuestion(userContent);
  if (!isRelatedQuestion) {
    return res.status(200).json({ isRelatedQuestion });
  }

  const answer = await answering(userContent);
  return res.status(200).json({ isRelatedQuestion, answer });
};