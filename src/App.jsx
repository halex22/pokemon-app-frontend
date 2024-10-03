import { LinkedInLogo } from "./components/svg/logos"
import { GitHubLogo } from "./components/svg/logos"

function App() {

  const handleLinkedClick = () => {
    window.location.href = 'https://www.linkedin.com/in/hugo-martínez-9521b5268/'
  }

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/halex22'
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Welcome!</h2>

      <p className="mt-4 text-lg">Please feel free to look around my Pokemon API.</p>

      <div className="flex mt-4">
        
      <div className="cursor-pointer" onClick={handleLinkedClick}><LinkedInLogo size={64} /></div>
      <div className="cursor-pointer" onClick={handleGitHubClick}><GitHubLogo size={64} /></div>
        
      </div>
    </main>
  )
}

export default App
