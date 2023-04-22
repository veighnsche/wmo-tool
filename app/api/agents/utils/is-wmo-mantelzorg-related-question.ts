import { assist, system, user } from "@/app/api/agents/utils/message-wrapper"
import { chatCompletion } from "@/app/api/agents/utils/openai-configuration"

export const isWMOMantelzorgRelatedQuestion = async (userContent: string) => {
  const message = await chatCompletion(
    "is-wmo-mantelzorg-related-question",
    system("Als chat moderator is het jouw taak om te beoordelen of een vraag over een WMO of mantelzorg onderwerp gaat. Een WMO onderwerp verwijst naar vragen over hulp bij het zelfstandig wonen en participeren in de samenleving, zoals huishoudelijke hulp, persoonlijke verzorging, begeleiding en dagbesteding. Een mantelzorg onderwerp verwijst naar vragen over de zorg die wordt verleend aan een hulpbehoevende door iemand uit diens directe omgeving, zoals ondersteuning voor mantelzorgers, gevolgen van mantelzorg voor de gezondheid en verschillende vormen van respijtzorg. Als een vraag over een van deze onderwerpen gaat, zeg dan \"TRUE\", als het over iets anders gaat, zeg dan \"FALSE\"."),
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
      user("Bedankt voor de uitleg!"),
      assist("FALSE"),
      user("Welke dagbestedingsmogelijkheden zijn er voor mensen met een beperking?"),
      assist("TRUE"),
      user("Hoe bereid ik een sollicitatiegesprek voor?"),
      assist("FALSE"),
      user("Ik wil graag een taalcursus volgen."),
      assist("FALSE"),
      user("Ik heb net een aanvraag voor WMO-hulp ingediend."),
      assist("TRUE"),
      user("Kun je me vertellen welk restaurant het beste is in de buurt?"),
      assist("FALSE"),
      user("Ik heb een nieuwe telefoon gekocht."),
      assist("FALSE"),
      user("Mijn broer helpt mijn vader met de dagelijkse verzorging."),
      assist("TRUE"),
      user("Hoe kan ik mijn computer upgraden?"),
      assist("FALSE"),
      user("Super, ik weet nu meer waar het over gaat!"),
      assist("FALSE"),
      user("Ik heb gelezen over de verschillende vormen van respijtzorg."),
      assist("TRUE"),
      user("Ik wil graag vrijwilligerswerk doen voor een organisatie die mantelzorgers ondersteunt."),
      assist("TRUE"),
      user(userContent),
    ],
  )

  return message === "TRUE"
}