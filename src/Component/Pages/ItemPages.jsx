import { giziUnggulan, ringkasan } from "../data"

const ItemPages = () => {
  return (
    <div className="">
      <div className="relative mb-20">
        <img src="./public/nav.png" alt="" />
        <div className="flex justify-center items-center gap-3 absolute top-7 left-[5rem]">
          <i className='bx bx-home-alt-2 text-white'></i>
          <i className='bx bx-chevron-right text-white'></i>
          <p className="text-btn">
            Rekomendasi
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex items-center justify-around p-5 mb-20">

        <div className="">
          <img src="./public/pisang.png" alt="" className="w-[350px]" />
        </div>

        <div className="w-1/2">
          <div className="">
            <h1 className="text-3xl font-semibold mb-3">
              Pisang, segar
            </h1>
            <hr />
          </div>
          <div className="mt-5">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque, quos hic facere ipsa dolor labore atque fugit, unde nobis pariatur, excepturi nisi minus nostrum.
            </p>
            <hr />
          </div>
          <div className="flex  justify-between  mt-5">
            <p>
              category :
              <span> Buah-buahan</span>
            </p>
            <div className="flex gap-3 items-center">
              <p>
                Share :
              </p>
              <ul className="flex gap-3">
                <li>
                  <i class='bx bxl-facebook'></i>
                </li>
                <li>
                  <i class='bx bxl-twitter'></i>
                </li>
                <li>
                  <i class='bx bxl-instagram'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h1 className="text-3xl text-center mx-auto font-semibold mb-10">
          Ringkasan
        </h1>
        <div className="w-9/12  gap-8 mx-auto flex mb-16">
          {ringkasan.map((data) => {
            return (
              <div key={data.id} className="w-full shadow-lg rounded-lg p-5 text-center mb-2 mx-auto">
                <div className="flex gap-5 items-center">
                  <div className="">
                    <img src={data.img} alt="" className="mx-auto mb-2 w-[50px]" />
                  </div>
                  <div className="">
                    <h3 className="text-[18px] ">
                      {data.title}
                    </h3>
                    <p className="text-[15px] text-item">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mb-32">
        <h1 className="text-3xl text-center mx-auto font-semibold mb-10">
          Zat Gizi Unggulan
        </h1>
        <div className="w-9/12  gap-8 mx-auto flex mb-16">
          {giziUnggulan.map((data) => {
            return (
              <div key={data.id} className="w-full shadow-lg rounded-lg p-5 text-center mb-2 mx-auto">
                <div className="flex justify-between gap-5 items-center">
                  <p>
                    {data.no}
                  </p>
                  <p>
                    {data.persen}
                  </p>
                </div>
                <h2 className="text-lg font-semibold">
                  {data.title}
                </h2>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default ItemPages