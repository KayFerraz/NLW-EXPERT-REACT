export function NewCard(){
    return (
        <button className=" text-left rounded-md bg-pink-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-rose-950 "> 
                <span className="text-sm font-bold text-pink-200">
                  Adiconar nota
                </span>
                  <p className='text-pink-200 text-sm leading-6'> 
                    Grave uma nota em áudio que será convertida em texto automaticamente.
                    </p>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 " /> 
      </button>
    )
}