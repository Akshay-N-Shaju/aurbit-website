import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { ChildSafety } from './pages/ChildSafety'
import { Home } from './pages/Home'
import { Invite } from './pages/Invite'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { Support } from './pages/Support'
import { Terms } from './pages/Terms'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/child-safety" element={<ChildSafety />} />
        <Route path="/r/:code?" element={<Invite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
