import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export function NewCard(){
    return (
      <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-pink-700 p-5 gap-3">
        <button className=" text-left rounded-md bg-pink-700 p-5 relative gap-2 outline-none overflow-hidden   hover:ring-rose-950 "> 
                <span className="text-sm font-bold text-pink-200">
                  Adiconar nota
                </span>
                  <p className='text-pink-200 text-sm leading-6'> 
                    Grave uma nota em áudio que será convertida em texto automaticamente.
                  </p>
                <div className=" bottom-0 left-0 right-0 h-1/2 " /> 
            </button>
        </Dialog.Trigger>
        <Dialog.Overlay  className="inset-0 fixed bg-black/60"/>
                <Dialog.Portal>
                    <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-pink-700 rounded-md flex flex-col outline-none">
                        <Dialog.Close className="absolute top-0 right-0 bg-black p-1.5 rounded-md">
                            <X className="w-5 h-5" />
                        </Dialog.Close>
                                <div className="flex flex-1 flex-col gap-3 p-5"> 
                                <span className="text-sm font-bold text-pink-300">
                                    Adicionar Nota
                                        </span>
                                        <p className='text-pink-200 text-sm leading-6'> 
                                           
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