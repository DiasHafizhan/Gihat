import { useNavigate } from "react-router-dom"
import { rekomendasi } from "../data"

const HasilPages = () => {
  const navigate = useNavigate()

  return (
    <div className="w-9/12 mx-auto">
      <div className=" w-8/12 mx-auto bg-navbar mt-5 text-white p-5 rounded-lg">
        <h1 className="text-2xl mb-5 font-semibold">Hasil Analisa</h1>
        <p className="text-[15px]">
          Dari data yang telah kamu masukan, kamu termasuk ke dalam tipe badan (if BMI  18.5, kurus, if 18.5  BMI 24.9: Normal (ideal) print ideal, if BMI 25: Gemuk print gemuk)
        </p>
      </div>
      <div className=" w-8/12 mx-auto bg-navbar mt-5 text-white p-5 rounded-lg">
        <h1 className="text-2xl mb-5 font-semibold">Kebutuhan Kalori Harian</h1>
        <p className="text-[15px]">
          Kebutuhan kalori mu perhari sekitar (print rumus bmr) jika ingin masuk ke tipe badan ideal, kamu harus mencakupi kalori sekitar (rumus bmr xx)
        </p>
      </div>
      <div className=" w-8/12 mx-auto bg-navbar mt-5 mb-36 text-white p-5 rounded-lg">
        <h1 className="text-2xl mb-5 font-semibold">Kebutuhan Olahraga Setiap Hari</h1>
        <p className="text-[15px]">
          Kami merekomendasikan untuk berolahraga (if kurus print ringan, if ideal print sedang, if gemuk print sedang, if gemuk print/berat) dalam waktu (if kurus print 3 hari seminggu, if ideal print 5 hari seminggu, if grmuk print 6 hari perhari)
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold flex justify-center mb-10">
          Rekomendai Makanan
        </h2>

        <div className="w-12/12 gap-5 mx-auto flex mb-16 cursor-pointer" onClick={() => navigate("/rekomendasi")}>
          {rekomendasi.map((data) => {
            return (
              <div key={data.id} className="w-1/5 bg-white shadow-lg rounded-lg p-5 text-center">
                <img src={data.img} alt="" className="mx-auto mb-2 w-[75px]" />
                <h3 className="text-xl mb-2">
                  {data.title}
                </h3>
                <p className="text-[15px] text-item">
                  {data.item}
                </p>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default HasilPages