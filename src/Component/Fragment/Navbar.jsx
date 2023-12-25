import React from "react"
import { Link } from "react-router-dom"
import { navbar } from "../data"

const Navbar = () => {

  const [scroll, setScroll] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <div>
      <div className="flex items-center gap-4 p-5 w-11/12 mx-auto">
        <img src="./public/logo.png" alt="" className="w-[50px]" />
        <p className="text-2xl font-semibold">
          Gihat
        </p>
      </div>

      <div className={scroll ? 'navbar-fixed' : ''}>
        <div className="w-full mx-auto items-center bg-navbar p-5 text-white">
          <div className="w-11/12 mx-auto flex justify-between">
            <ul className="flex gap-8">
              {navbar.map((data) => {
                return (
                  <li key={data.id}>
                    <Link to={data.path}>
                      {data.link}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <p className="text-xl font-semibold text-white">
              Gihat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar