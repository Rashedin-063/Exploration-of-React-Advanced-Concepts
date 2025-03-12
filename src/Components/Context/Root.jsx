import Navbar from "./Navbar"
import ThemeProvider from "./ThemeProvider"

const Root = () => {
  return (
    <ThemeProvider>
      <Navbar/>
   </ThemeProvider>
  )
}
export default Root