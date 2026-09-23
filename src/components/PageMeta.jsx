import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pages = {
  '/': ['Zavier Vega-Yu', 'Portfolio of Zavier Vega-Yu, a computer science student and software engineer.'],
  '/about': ['Zavier Vega-Yu', 'About Zavier Vega-Yu, a computer science student and software engineer.'],
  '/projects': ['Zavier Vega-Yu', 'Selected software engineering projects by Zavier Vega-Yu.'],
  '/patch-notes': ['Patch notes · Zavier Vega-Yu', 'Personal patch notes from Zavier Vega-Yu.'],
}

export default function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const [title, description] = pages[pathname] ?? pages['/']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pathname])

  return null
}
