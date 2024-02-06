export function NoteCardComponent () {
    return (
        <button className="rounded-md bg-pink-900 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-rose-500  focus-visible:ring-2 focus-visible:ring-pink-300"> 
                  <span className="text-sm font-bold text-pink-300">há 2 dias</span>
                <p className='text-pink-200 text-sm leading-6'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim vitae aut animi culpa quod reprehenderit voluptatem, dignissimos, alias natus labore, ducimus consequatur ratione earum explicabo veniam eius! Blanditiis, eos?                
                </p>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-700 to-pink/900   pointer-events-none " /> 
        </button>
    )
}