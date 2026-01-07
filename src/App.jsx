import { useState } from 'react'
import Login from './Login'
import Registration from './Registration'
import Landing from './Landing'

export default function App() {
  const [view, setView] = useState('landing')

  if (view === 'landing') return <Landing onGetStarted={() => setView('login')} />
  if (view === 'login') return <Login onSwitchToRegistration={() => setView('registration')} />
  if (view === 'registration') return <Registration onSwitchToLogin={() => setView('login')} />
  return <Login onSwitchToRegistration={() => setView('registration')} />
}
