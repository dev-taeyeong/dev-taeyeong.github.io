import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import { setLight, setDark } from "reducers/theme"

import { light, dark } from "assets/theme"

import GlobalStyles from "components/GlobalStyles"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.theme)

  let localTheme = null
  if (typeof localStorage !== "undefined") {
    localTheme = sessionStorage.getItem("theme")
  }

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    dispatch(nextTheme === "dark" ? setDark : setLight)
    localTheme = sessionStorage.setItem("theme", nextTheme)
  }

  useEffect(() => {
    dispatch(localTheme == "dark" ? setDark : setLight)
  }, [])

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Body>{children}</Body>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
