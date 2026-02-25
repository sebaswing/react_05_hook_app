import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/counterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { Layout } from './05-useLayoutEffect/Layout.jsx'
// import { Memorize } from './06-memos/Memorize'
// import { MemorHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // {/* <HooksApp /> */}
    // {/* <CounterWithCustomHook /> */}
    // <SimpleForm />,
    // <FormWithCustomHook />
    // <MultipleCustomHooks />
        // <FocusScreen />
        // <Layout />
        // <Memorize />
        // <MemorHook />
        // <CallbackHook />
        <Padre />
  // </StrictMode>,
)
