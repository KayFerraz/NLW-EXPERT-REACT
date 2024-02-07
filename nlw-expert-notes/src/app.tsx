import logo from './assets/logo-nlw-expert.svg'
import { NewCard } from './components/new-card'
import { NoteCardComponent } from './components/notes-card'
export function App() {
  return ( 
  <div className="mx-auto max-w-6xl my-12 space-y-6">  
    <img src={logo} />
        <form action="" className="w-full "> 
              <input 
              type="text" 
              placeholder='Busque em suas notas...'
              className="w-full bg-transparent text-3xl font-bold tracking-tight outline-none placeholder:text-rose-300"
              />
        </form>
       <div className="h-px bg-rose-300"/>
          <div className=" grid grid-cols-3 auto-rows-[250px] gap-6">
            
  <NewCard/>  
    <NewCard/>
      <NoteCardComponent date={new Date()} content={'Hello World'}/>
        
    </div>
  </div>
   )
}
