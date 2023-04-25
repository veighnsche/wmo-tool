import { assist, system, user } from "@/utils/ai/utils/message-wrapper"
import { chatCompletion } from "@/utils/ai/utils/openai-configuration"

export const checkIfRelatedQuestion = async (userContent: string) => {
  const message = await chatCompletion(
    "is-wmo-mantelzorg-related-question",
    system(`Als chat moderator is het jouw taak om te beoordelen of een vraag over een WMO of mantelzorg onderwerp gaat. Een WMO onderwerp verwijst naar vragen over hulp bij het zelfstandig wonen en participeren in de samenleving, zoals huishoudelijke hulp, persoonlijke verzorging, begeleiding en dagbesteding. Een mantelzorg onderwerp verwijst naar vragen over de zorg die wordt verleend aan een hulpbehoevende door iemand uit diens directe omgeving, zoals ondersteuning voor mantelzorgers, gevolgen van mantelzorg voor de gezondheid en verschillende vormen van respijtzorg. Als een vraag over een van deze onderwerpen gaat, zeg dan "TRUE", als het over iets anders gaat, zeg dan "FALSE". Je mag niks anders zeggen.`),
    [
      user("Ik heb een vraag over mijn zorgverzekering."),
      assist("FALSE"),
      user("Wat is de WMO?"),
      assist("TRUE"),
      user("Hoe bak ik een cake?"),
      assist("FALSE"),
      user("wat betekent respijtzorg?"),
      assist("TRUE"),
      user("wat is de maximale eigen bijdrage?"),
      assist("TRUE"),
      user("Hoe werkt het Nederlandse belastingstelsel?"),
      assist("FALSE"),
      user(userContent),
    ],
    {
      temperature: 0,
      max_tokens: 5,
    },
  )

  console.log("is Related?", message)

  return message === "TRUE"
}