import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center mt-10 mb-20 p-5">
          <p className="max-w-2xl">
            Selamat datang di blog kami yang dipenuhi inspirasi dan pengetahuan seputar kesehatan holistik Di sini, kami akan membahas dua elemen kunci untuk mencapai hidup lebih baik dan sehat: gizi seimbang dan rencana olahraga yang berencana. Ayo kita eksplorasi bersama rahasia utama untuk mencapai kesehatan optimal.
          </p>
          <img src="./public/home1.png" alt="" className="w-[450px]" />
        </div>
        <div className="flex justify-between items-center mb-20 p-5">
          <img src="./public/home1.png" alt="" className="w-[450px]" />
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold mb-5">
              Gizi Seimbang: Dasar Kesehatan yang Kokoh
            </h2>
            <p className="">
              Keseimbang gizi menjadi kunci utama untuk menjaga tubuh tetap energik dan berfungsi secara optimal. Dengan memilih jenis makanan yang tepat. Kita menyediakan nutrusi penting yang dibutuhkan tubuh untuk pertumbuhan, perkembangan, dan menjaga kesehatan organ-organ vital. Gizi seimbang juga berperan dalam meningkatkan daya tahan tubuh dan mengurangi penyakit.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-20 p-5">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold mb-5">
              Olaharaga:  Kegiatan untuk Mencerahkan Kehidupan
            </h2>
            <p className="">
              Olaharaga bukan hanya mengenai membentuk tubuh, tetapi juga memberikan kegembiraan dan energi positif dalam kehidupan sehati-hari. Aktivitas teratur dapat meningkatkan peredaran darah, meredakan stres, dan memberikan kebuguran jangka panjang.
            </p>
          </div>
          <img src="./public/home2.png" alt="" className="w-[450px]" />
        </div>
      </div>
      <div className="w-full bg-calculate flex flex-col justify-center mb-20 py-20">
        <p className="max-w-2xl mx-auto text-center mb-5">
          Jika Anda tertarik untuk melakukan kalkulasi kalori dan rekomendasi makanan dan jadwal olahraga di web, silakan klik tombol dibawah untuk menuju langkah selanjutnya.Semoga informasi ini bermanfaat untuk Anda
        </p>
        <div className="mx-auto">
          <button
            className="py-3 px-10 rounded-3xl bg-btn text-white"
            onClick={() => navigate('/calculate')}
          >
            Mulai
          </button>
        </div>
      </div>
    </>
  )
}

export default Home