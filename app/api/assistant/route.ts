import { answering } from "@/utils/ai/answering";
import { checkIfRelatedQuestion } from "@/utils/ai/check-if-related-question";
import { ERRORS } from "@/utils/ai/utils/errors"
import { updateFirestoreRateLimit } from "@/utils/firebase/rate-limiter";

export async function POST(request: Request) {
  const isRateLimited = !(await updateFirestoreRateLimit());

  if (isRateLimited) {
    return new Response(
      JSON.stringify({ error: ERRORS.RATE_LIMIT_EXCEEDED }),
      { status: 429 } // 429 Too Many Requests
    );
  }

  const { chatHistory, userContent } = await request.json();

  const isRelatedQuestion = await checkIfRelatedQuestion(userContent);
  if (!isRelatedQuestion) {
    return new Response(
      JSON.stringify({ error: ERRORS.UNRELATED_QUESTION }),
      { status: 400 } // 400 Bad Request
    );
  }

  const answer = await answering({ chatHistory, userContent });
  return new Response(
    JSON.stringify({ answer }),
    { status: 200 } // 200 OK
  );
}
