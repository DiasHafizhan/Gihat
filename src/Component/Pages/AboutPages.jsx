import { team } from "../data"

const AboutPages = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex justify-between items-center my-10">
        <div className="">
          <h1 className="text-3xl font-bold mb-5">
            <span className="text-btn">
              Tentang
            </span> GIHAT
          </h1>
          <p className="max-w-xl">
            GIHAT merupakan web yang bertujuan untuk membantu pengguna mencari tahu tentang angka kecukupan gizi, makanan yang diperlukan untuk memenuhi gizi dan aktifitas-aktifitas sehat lainnya, Sehingga dengan mudah kita bisa mengatur pola hidup sehat kita
          </p>
        </div>
        <div className="flex items-center gap-4 p-5">
          <img src="./public/logo.png" alt="" className="w-[80px]" />
          <p className="text-4xl font-semibold">
            Gihat
          </p>
        </div>

      </div>

      <div className="flex flex-col justify-center mt-32 mb-20">
        <h1 className="text-4xl font-bold mx-auto mb-5">
          <span className="text-btn">
            Tim
          </span> Kami
        </h1>
        <p className="max-w-xl mx-auto text-center">
          Kami adalah tim yang berkomitmen untuk memberikan solusi inovasi dan berkualitas tinggi untuk memenuhi kebutuhan anda. Dengan pengalaman dan dedikasi kami bertujuan untuk memberikan pengalaman terbaik kepada pelanggan kami
        </p>
      </div>

      <div className="w-10/12 mx-auto flex flex-wrap justify-center gap-5 text-center">
        {team.map((data) => {
          return (
            <div key={data.id} className="mb-10">
              <img src={data.img} alt="" className="w-[250px] mb-4" />
              <p>
                {data.nama}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutPages