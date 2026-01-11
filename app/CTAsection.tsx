"use client";

import Link from "next/link";
import React from "react";

function CTAsection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-purple-600 via-indigo-600 to-blue-600 p-12 lg:p-16 shadow-2xl shadow-purple-500/30">
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative text-center">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              พร้อมเริ่มดูแลสุขภาพช่องปากแล้วหรือยัง?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              เข้าร่วมกับผู้ใช้งานหลายหมื่นคนที่ไว้วางใจ Dental AI
              เริ่มต้นฟรีวันนี้!
            </p>
            <Link
              href={"/chat"}
              className="px-10 py-5 bg-white text-purple-700 font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 text-lg inline-block"
            >
              เริ่มใช้งานฟรี →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAsection;
