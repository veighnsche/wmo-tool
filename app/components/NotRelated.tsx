export const NotRelated = () => {
  return (
    <div className="w-[800px] flex flex-col bg-[#EBBCAD] m-4 rounded-xl">
      <div className="p-4 bg-[#D57251] rounded-t-xl">
        <p className="font-bold text-white">Naar mijn mening heeft uw vraag geen verband met de WMO
          of
          mantelzorg.</p>
      </div>
      <div className="p-4">
        <p>Probeer het opnieuw te formuleren of verduidelijk uw vraag alstublieft.</p>
        <p>Houd er rekening mee dat wij momenteel nog in de bètafase zitten. Als u denkt dat wij een
          fout hebben gemaakt, kunt u ons mailen of bellen op: <a href="mailto:info@zorggenoot.nl"
                                                                  className="font-bold underline">info@zorggenoot.nl</a>.
        </p>
      </div>
    </div>
  )
}