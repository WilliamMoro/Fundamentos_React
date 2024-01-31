import './App.css'

// 2 - importando componente
import FirstComponent from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpression'

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - Eventos de click
import Events from './components/Events'

function App() {
  // 3 - adicionando comentário
  return (
      <div className='App'>
        {/* 3 - comentário JXS */}
        <h1>Fundamentos do Reackt</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponent/>
        <Events/>
      </div>
  )
}

export default App
