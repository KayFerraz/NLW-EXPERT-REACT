import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import {toast} from 'sonner'

interface NewNoteCradProps {
  oneNoteCreated: (content: string) => void
}



export function NewCard({ oneNoteCreated }: NewNoteCradProps)
{
  const [shouldShowOnboarding, setShouldOnboarding] = useState(true) 
  const [content, setContent] = useState('') 
  const [isRecording, setIsRecording] = useState(false)
  
  let speechRecognition: SpeechRecognition | null = null 
  function handleStartEditor(){
    setShouldOnboarding (false)
  }
  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>){
    setContent (event.target.value)
    if (event.target.value == '') {
      setShouldOnboarding (true)
    }
  }
  function handleSaveNote(event: FormEvent){
    event.preventDefault()

if (content === ''){
  return 
}

    oneNoteCreated(content)
    setContent('')
    setShouldOnboarding(true)

    toast.success('Nota criada com sucesso.')
  }

  function handleStartRecording (){
    const isSpeechRecognitionAPIAvaliable ='SpeechRecognition' in window
      || 'webkitSpeechRecognition' in window

      if (!isSpeechRecognitionAPIAvaliable) {
        alert("Seu navegador nao suporta a gravação")
        return
      }
      setIsRecording(true)
      setShouldOnboarding (false)

      const SpeechRecogntionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

      speechRecognition = new SpeechRecogntionAPI()

      speechRecognition.lang = 'pt-BR'
      speechRecognition.continuous = true
      speechRecognition.maxAlternatives = 1
      speechRecognition.interimResults = true

      speechRecognition.onresult = (event) => {
        const transcription = Array.from(event.results).reduce((text, result) =>{ 
          return text.concat(result[0].transcript)
        }, '')

        setContent(transcription)
      }
      speechRecognition.onerror = (event) => {
        console.error(event)
      }
      speechRecognition.start( )
  }

  function handleStopRecording (){
    setIsRecording(false)

    if (speechRecognition != null) {
     speechRecognition.stop() 
    }
  }
  return (
      <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-pink-700 p-5 gap-3 hover:ring-2 hover:ring-rose-400">
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
                            <form className="flex-1 flex flex-col">
                                <div className="flex flex-1 flex-col gap-3 p-5"> 
                                <span className="text-sm font-bold text-pink-300">
                                    Adicionar Nota
                                        </span>
                                        {shouldShowOnboarding ? 
                                        (<p className='text-pink-200 text-sm leading-6'> 
                                           Comece <button type="button" onClick={handleStartRecording} className="font-medium text-green-300 hover:underline">gravando uma nota em áudio</button>, ou se preferir, <button type="button" onClick={handleStartEditor} className="font-medium text-green-300 hover:underline">utilize apenas texto</button>.
                                          </p> ) : (
                                          <textarea  
                                          autoFocus
                                          onChange={handleContentChanged}
                                          className="text-sm leading-6 text-slate-black bg-transparent resize-none flex-1 outline-none"
                                          value={content}
                                          />)}
                                          
                                </div>
                                  {isRecording ? (
                                     <button 
                                     type="button"
                                     onClick={handleStopRecording}
                                     className="w-full bg-slate-900 py-4 text-center text-sm text-white outline-none group font-semibold hover:text-slate-700">
                                         Gravando! (clique para interromper)
                                         </button>
                                  ) : (
                                    <button 
                                    type="submit"
                                    onClick={handleSaveNote}
                                    className="w-full bg-green-300 py-4 text-center text-sm text-black outline-none group font-semibold hover:bg-green-400">
                                        Salvar nota
                                        </button>     
                                  )}                

                                
                               </form>
                    </Dialog.Content>
                </Dialog.Portal>
      </Dialog.Root>
    )
}