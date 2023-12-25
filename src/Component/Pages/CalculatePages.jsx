import InputForm from "../Element/Input"
import { user } from "../data"

const CalculatePages = () => {
  return (
    <>
      <div className=" w-9/12 mx-auto">
        <form action="" className="flex flex-wrap justify-between mx-auto mt-10 mb-48 max-w-xl gap-5 bg-calculate p-10">
          <InputForm
            label="Umur"
            type="text"
            placeholder="years"
          />
          <div className="flex flex-col">
            <label htmlFor="" className="block text-slate-700 font-bold mb-2">Gender</label>
            <select id="gender" className="w-[200px] h-[40px]">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <InputForm
            label="Tinggi"
            type="text"
            placeholder="Cm"
          />
          <InputForm
            label="Berat"
            type="text"
            placeholder="Kg"
          />
          <div className="flex flex-col">
            <label htmlFor="" className="block text-slate-700 font-bold mb-2">Waktu Olahraga</label>
            <select id="gender" className="w-[390px] h-[40px]">
              <option value="">
                Sedentary (Jarang Beraktivitas)
              </option>
              <option value="">
                Light activity (Ringan Beraktivitas)
              </option>
              <option value="">
                Moderate activity (Sedang Beraktivitas)
              </option>
              <option value="">
                Heavy activity (Berat Beraktivitas)
              </option>
            </select>
          </div>
          <button className="py-3 px-5 rounded-3xl bg-btn text-white mx-auto mt-5">
            Calculate
          </button>
        </form>
      </div>
      <div className="w-full bg-calculate mb-20">
        <div className="w-11/12 mx-auto p-5">
          <h2 className="text-2xl mt-5 font-semibold">
            Client Testimonials
          </h2>
          <div className="flex justify-between">
            {user.map((data) => {
              return (
                <div key={data.id} className="w-[32%] bg-white my-10 p-5 rounded-lg">
                  <p className="text-[15px]">
                    {data.desk}
                  </p>
                  <div className="flex mt-5 justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={data.img} alt="" />
                      <h3 className="text-lg font-semibold">{data.name}</h3>
                    </div>
                    <div className="">
                      <i className='bx bx-star'></i>
                      <i className='bx bx-star'></i>
                      <i className='bx bx-star'></i>
                      <i className='bx bx-star'></i>
                      <i className='bx bx-star'></i>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default CalculatePages