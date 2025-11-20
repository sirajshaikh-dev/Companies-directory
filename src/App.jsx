
import CompanyGrid from './Components/CompanyGrid'
import Controls from './Components/Controls'
import Header from './Components/Header'
import { CompaniesProvider } from './Context/CompaniesContext'
import './index.css'
function App() {

  return (
    <CompaniesProvider>
      <div className="min-h-screen p-6 bg-page">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Controls />
          <CompanyGrid />
        </div>
      </div>
    </CompaniesProvider>
  )
}

export default App
