import Navbar from "./navigation/navbar.component";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}