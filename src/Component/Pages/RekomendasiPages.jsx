import React from "react"
import { rekomendasi } from "../data"
import { Link } from "react-router-dom"
import { cardRekomendasi } from "../data"

const RekomendasiPages = () => {
  return (
    <div className="">

      <div className="w-11/12 mx-auto flex gap-8 mb-20 mt-28">
        <div className="w-[25%] p-5">
          <h2 className="text-lg font-semibold mb-5">
            Rekomendasi
          </h2>
          <div className="">
            {rekomendasi.map((data) => {
              return (
                <div key={data.id} className="w-full shadow-lg rounded-lg p-5 text-center mb-2 mx-auto cursor-pointer">
                  <div className="flex gap-5 items-center">
                    <div className="">
                      <img src={data.img} alt="" className="mx-auto mb-2 w-[50px]" />
                    </div>
                    <div className="">
                      <h3 className="text-[18px] mb-2">
                        {data.title}
                      </h3>
                      <p className="text-[15px] text-item">
                        {data.item}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="w-10/12 flex flex-wrap p-5">
          {cardRekomendasi.map((data) => {
            return (
              <div key={data.id} className="w-[40%] mx-auto rounded-lg mb-5 bg-white shadow-md">
                <img src={data.img} alt="" className="w-full mx-auto rounded-t-lg" />
                <div className="p-5 bg-white">
                  <div className="flex gap-3 items-center mb-3">
                    <i class='bx bx-purchase-tag-alt'></i>
                    <p>
                      {data.item}
                    </p>
                  </div>
                  <div className="">
                    <p>
                      {data.desc}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center text-btn mt-3">
                    <Link to={"/item"}>
                      {data.link}
                    </Link>
                    <i class='bx bxs-right-arrow-alt'></i>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RekomendasiPages