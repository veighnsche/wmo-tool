import { ERRORS } from "@/utils/ai/utils/errors"


const text: {
  [key in ERRORS]: {
    title: string
    body: JSX.Element
  }
} = {
  [ERRORS.UNRELATED_QUESTION]: {
    title: "Naar mijn mening heeft jouw vraag geen verband met de WMO of mantelzorg.",
    body: (
      <>
        <p>Probeer het opnieuw te formuleren of verduidelijk jouw vraag alstublieft.</p>
        <p>
          Houd er rekening mee dat wij momenteel nog in de bètafase zitten. Als je denkt dat wij een
          fout hebben gemaakt, kun je ons mailen of bellen op:
          <a href="mailto:info@zorggenoot.nl" className="font-bold underline">info@zorggenoot.nl</a>.
        </p>
      </>
    )
  },
  [ERRORS.RATE_LIMIT_EXCEEDED]: {
    title: "Sorry, maar het is momenteel te druk. Probeer het over een uur nog eens.",
    body: (
      <>
        <p>We stellen jouw geduld op prijs en verontschuldigen ons voor het ongemak.</p>
        <p>
          Als je dringende vragen hebt, kun je ons mailen of bellen op:
          <a href="mailto:info@zorggenoot.nl" className="font-bold underline">info@zorggenoot.nl</a>.
        </p>
      </>
    )
  },
}

interface ErrorMessageProps {
  error: ERRORS
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="w-[800px] flex flex-col bg-[#EBBCAD] m-4 rounded-xl">
      <div className="p-4 bg-[#D57251] rounded-t-xl">
        <p className="font-bold text-white">
          {text[error].title}
        </p>
      </div>
      <div className="p-4">
        {text[error].body}
      </div>
    </div>
  )
}