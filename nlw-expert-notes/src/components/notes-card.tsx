import * as Dialog from '@radix-ui/react-dialog';

interface NoteCardProps {
   
    date: Date
    content: string
   
}

export function NoteCardComponent (props: NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col bg-pink-900 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-rose-500  focus-visible:ring-2 focus-visible:ring-pink-300"> 
                    <span className="text-sm font-bold text-pink-300">
                    {props.date.toISOString()}
                    </span>
                    <p className='text-pink-200 text-sm leading-6'> 
                    {props.content}
                    </p>
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-700 to-pink/900   pointer-events-none " /> 
            </Dialog.Trigger>
                <Dialog.Portal>
                    
                </Dialog.Portal>
        </Dialog.Root>
    )
}