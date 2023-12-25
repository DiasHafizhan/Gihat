import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-full bg-navbar">
      <div className="w-10/12 flex mx-auto items-center">
        <div className="flex gap-4 items-center my-10">
          <img src="./public/logo.png" alt="" className="w-[50px]" />
          <p className="text-2xl font-semibold text-white">
            Gihat
          </p>
        </div>
        <div className="my-10 mx-auto text-white">
          <p className="text-xl font-semibold mb-3">Navbar</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link>
                Home
              </Link>
            </li>
            <li>
              <Link>
                About Us
              </Link>
            </li>
            <li>
              <Link>
                Calculate
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white w-full flex justify-center items-center">
        <p className="mb-8 mt-4">
          Gihat © 2023. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer