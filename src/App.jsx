import { useState } from 'react'
import Login from './Login'
import Landing from './Landing'

export default function App() {
  const [view, setView] = useState('landing')

  if (view === 'landing') return <Landing onGetStarted={() => setView('login')} />
  return <Login />
}
