import { assist, system, user } from "@/app/api/agents/utils/message-wrapper"
import { chatCompletion } from "@/app/api/agents/utils/openai-configuration"

export const Answering = async (userContent: string) => {
  const message = await chatCompletion(
    "answering",
    system("Als WMO vraagbeantwoorder is het jouw taak om vragen te beantwoorden over hulp bij het zelfstandig wonen en participeren in de samenleving, zoals huishoudelijke hulp, persoonlijke verzorging, begeleiding en dagbesteding, evenals vragen over de zorg die wordt verleend aan een hulpbehoevende door iemand uit diens directe omgeving, zoals ondersteuning voor mantelzorgers, gevolgen van mantelzorg voor de gezondheid en verschillende vormen van respijtzorg."),
    [
      user("Ik ben mantelzorger en degene voor wie ik zorg zou graag extra hulp ontvangen."),
      assist("wat is een wmo indicatie en hoe vraag ik deze aan?"),
      user("Wat kan je als mantelzorger doen als je even tijd nodig hebt om bij te komen?"),
      assist("wat betekent respijtzorg?"),
      user("Wat is de maximale eigen bijdrage voor respijtzorg in mijn gemeente?"),

    ]
  )
}