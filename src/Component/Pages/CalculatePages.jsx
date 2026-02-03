import React, { useState } from 'react';

const CalculatorPage = () => {
  const [input, setInput] = useState({
    weight: '', height: '', age: '', gender: 'pria', activity: '1.2'
  });
  const [hasil, setHasil] = useState(null);

  const hitungSemua = () => {
    const { weight, height, age, gender, activity } = input;
    if (!weight || !height || !age) return alert("Isi semua data!");

    // 1. Hitung BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    // 2. Hitung BMR (Mifflin-St Jeor)
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === 'pria' ? bmr + 5 : bmr - 161;

    // 3. Hitung TDEE (Kalori Harian)
    const tdee = Math.round(bmr * parseFloat(activity));

    // 4. Klasifikasi & Rekomendasi
    let tipe, olahraga, frekuensi, rekomendasiMakanan;
    if (bmi < 18.5) {
      tipe = "Kurus"; 
      olahraga = "Ringan"; 
      frekuensi = "3 hari seminggu";
      rekomendasiMakanan = [
        { nama: "Nasi Merah", deskripsi: "Karbohidrat kompleks untuk energi", kalori: "~350 kcal/porsi" },
        { nama: "Ayam & Telur", deskripsi: "Protein tinggi untuk massa otot", kalori: "~200 kcal/porsi" },
        { nama: "Alpukat", deskripsi: "Lemak sehat & kalori tinggi", kalori: "~240 kcal/buah" },
        { nama: "Kacang-kacangan", deskripsi: "Protein nabati & lemak baik", kalori: "~160 kcal/porsi" },
        { nama: "Smoothie Buah", deskripsi: "Vitamin & kalori tambahan", kalori: "~200 kcal/gelas" }
      ];
    } else if (bmi <= 24.9) {
      tipe = "Normal (Ideal)"; 
      olahraga = "Sedang"; 
      frekuensi = "5 hari seminggu";
      rekomendasiMakanan = [
        { nama: "Oatmeal", deskripsi: "Serat tinggi untuk pencernaan", kalori: "~150 kcal/porsi" },
        { nama: "Ikan Salmon", deskripsi: "Omega-3 & protein berkualitas", kalori: "~200 kcal/porsi" },
        { nama: "Sayuran Hijau", deskripsi: "Vitamin & mineral lengkap", kalori: "~50 kcal/porsi" },
        { nama: "Buah Berry", deskripsi: "Antioksidan & rendah kalori", kalori: "~80 kcal/porsi" },
        { nama: "Yogurt Greek", deskripsi: "Probiotik & protein", kalori: "~100 kcal/porsi" }
      ];
    } else {
      tipe = "Gemuk"; 
      olahraga = "Berat"; 
      frekuensi = "6 hari seminggu";
      rekomendasiMakanan = [
        { nama: "Salad Sayur", deskripsi: "Rendah kalori, tinggi serat", kalori: "~50 kcal/porsi" },
        { nama: "Dada Ayam Panggang", deskripsi: "Protein tanpa lemak berlebih", kalori: "~165 kcal/porsi" },
        { nama: "Quinoa", deskripsi: "Karbohidrat sehat & mengenyangkan", kalori: "~120 kcal/porsi" },
        { nama: "Teh Hijau", deskripsi: "Metabolisme & antioksidan", kalori: "~2 kcal/gelas" },
        { nama: "Apel", deskripsi: "Serat tinggi & rendah kalori", kalori: "~95 kcal/buah" }
      ];
    }

    setHasil({ bmi, tdee, tipe, olahraga, frekuensi, rekomendasiMakanan });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Kalkulator Kesehatan
          </h1>
          <p className="text-gray-600 text-lg">Hitung BMI & Kebutuhan Kalori Harian Anda</p>
        </div>

        {/* Input Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform transition-all duration-300 hover:shadow-3xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Data Tubuh Anda</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Weight Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Berat Badan (kg)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="Contoh: 65" 
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300" 
                    onChange={(e) => setInput({...input, weight: e.target.value})} 
                  />
                  <span className="absolute right-4 top-3.5 text-gray-400 text-sm">kg</span>
                </div>
              </div>

              {/* Height Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tinggi Badan (cm)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="Contoh: 170" 
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300" 
                    onChange={(e) => setInput({...input, height: e.target.value})} 
                  />
                  <span className="absolute right-4 top-3.5 text-gray-400 text-sm">cm</span>
                </div>
              </div>

              {/* Age Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Umur</label>
                <input 
                  type="number" 
                  placeholder="Contoh: 25" 
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300" 
                  onChange={(e) => setInput({...input, age: e.target.value})} 
                />
              </div>

              {/* Gender Select */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Jenis Kelamin</label>
                <select 
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 cursor-pointer" 
                  onChange={(e) => setInput({...input, gender: e.target.value})}
                >
                  <option value="pria">Pria</option>
                  <option value="wanita">Wanita</option>
                </select>
              </div>

              {/* Activity Level */}
              <div className="group md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tingkat Aktivitas</label>
                <select 
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 cursor-pointer" 
                  onChange={(e) => setInput({...input, activity: e.target.value})}
                >
                  <option value="1.2">Sedentary (Jarang Olahraga)</option>
                  <option value="1.375">Light Activity (1-3 hari/minggu)</option>
                  <option value="1.55">Moderate Activity (3-5 hari/minggu)</option>
                  <option value="1.725">Heavy Activity (6-7 hari/minggu)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={hitungSemua} 
              className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              🧮 Hitung Sekarang
            </button>
          </div>
        </div>

        {/* Results Section */}
        {hasil && (
          <div className="animate-fade-in">
            {/* BMI & TDEE Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              {/* BMI Card */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl p-8 text-white transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">BMI Anda</h3>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-5xl font-bold mb-2">{hasil.bmi}</p>
                <p className="text-white/90 text-lg font-medium">{hasil.tipe}</p>
              </div>

              {/* TDEE Card */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl shadow-xl p-8 text-white transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Kalori Harian</h3>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                </div>
                <p className="text-5xl font-bold mb-2">{hasil.tdee}</p>
                <p className="text-white/90 text-lg font-medium">kcal/hari</p>
              </div>
            </div>

            {/* Analysis & Recommendations */}
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              {/* Analysis Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Hasil Analisa</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Dari data yang telah kamu masukan, kamu memiliki BMI <span className="font-bold text-purple-600">{hasil.bmi}</span> dan termasuk ke dalam tipe badan <span className="font-bold text-purple-600">{hasil.tipe}</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exercise Recommendation */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Rekomendasi Olahraga</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Kami merekomendasikan untuk berolahraga intensitas <span className="font-bold text-orange-600">{hasil.olahraga}</span> dengan frekuensi <span className="font-bold text-orange-600">{hasil.frekuensi}</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Recommendations */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rekomendasi Makanan
              </h2>
              <p className="text-center text-gray-600 mb-8">Untuk tipe badan <span className="font-bold">{hasil.tipe}</span></p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {hasil.rekomendasiMakanan.map((makanan, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{makanan.nama}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{makanan.deskripsi}</p>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl py-2 px-3">
                        <p className="text-sm font-bold text-purple-700">{makanan.kalori}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Note */}
            <div className="max-w-2xl mx-auto bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-sm text-gray-700 text-center">
                💡 <span className="font-semibold">Catatan:</span> Hasil ini hanya estimasi. Konsultasikan dengan profesional kesehatan untuk saran yang lebih akurat.
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CalculatorPage