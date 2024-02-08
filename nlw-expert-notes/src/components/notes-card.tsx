import * as Dialog from '@radix-ui/react-dialog';
import {formatDistanceToNow} from 'date-fns'
import { ptBR} from 'date-fns/locale';
import { X } from 'lucide-react';

export interface NoteCardProps {
   
    date: Date
    content: string
   
}

export function NoteCardComponent (props: NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col bg-pink-900 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-rose-500  focus-visible:ring-2 focus-visible:ring-pink-300"> 
                    <span className="text-sm font-bold text-pink-300">
                    {formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true})}
                    </span>
                    <p className='text-pink-200 text-sm leading-6'> 
                    {props.content}
                    </p>
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-700/0 to-pink/900   pointer-events-none " /> 
            </Dialog.Trigger>
              <Dialog.Overlay  className="inset-0 fixed bg-black/60"/>
                <Dialog.Portal>
                    <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-pink-700 rounded-md flex flex-col outline-none">
                        <Dialog.Close className="absolute top-0 right-0 bg-black p-1.5 hover:text-sla">
                            <X className="w-5 h-5" />
                        </Dialog.Close>
                                <div className="flex flex-1 flex-col gap-3 p-5"> 
                                <span className="text-sm font-bold text-pink-300">
                                    {formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true})}
                                        </span>
                                        <p className='text-pink-200 text-sm leading-6'> 
                                            {props.content}
                                    </p>
                                </div>


                                <button type="button"
                                className="w-full bg-pink-300 py-4 text-center text-sm text-black outline-none font-medium group font-semibold">
                                    Deseja <span className="text-red-600 group-hover:underline">apagar essa nota</span>?
                                    </button>
                    </Dialog.Content>
                </Dialog.Portal>
        </Dialog.Root>
    )
}