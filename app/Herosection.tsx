"use client";

import Link from "next/link";

function Herosection() {
  // const stats = [
  //   { number: "50K+", label: "ผู้ใช้งาน" },
  //   { number: "98%", label: "ความพึงพอใจ" },
  //   { number: "24/7", label: "พร้อมให้บริการ" },
  //   { number: "1M+", label: "คำปรึกษา" },
  // ];

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-purple-700">
                AI-Powered Dental Care
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">ยิ้มสดใส</span>
              <br />
              <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                ด้วย AI
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              ปรึกษาปัญหาสุขภาพช่องปากกับ AI ที่ฉลาด รับคำแนะนำจากผู้เชี่ยวชาญ
              ดูแลสุขภาพฟันได้ง่ายๆ ที่บ้าน
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={"/chat"}
                className="group px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-400/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                เริ่มปรึกษาเลย
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-indigo-400 rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full aspect-square bg-linear-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-[3rem] flex items-center justify-center shadow-2xl shadow-purple-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                <div className="text-9xl relative z-10 animate-bounce">🦷</div>

                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <span className="text-3xl">✨</span>
                </div>
                <div className="absolute bottom-12 left-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-linear-to-br from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-cyan-400 to-blue-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
