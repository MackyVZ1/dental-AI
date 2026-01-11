"use client"

import React from 'react'

function Howitworkssection() {
  return (
     <section id="how-it-works" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ใช้งานง่าย เพียง 3 ขั้นตอน
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'สร้างบัญชี', desc: 'ลงทะเบียนฟรี เริ่มใช้งานได้ทันที', icon: '👤' },
              { step: '02', title: 'บอกอาการ', desc: 'อธิบายอาการหรืออัพโหลดรูปภาพ', icon: '💬' },
              { step: '03', title: 'รับคำแนะนำ', desc: 'AI วิเคราะห์และให้คำปรึกษาแบบเรียลไทม์', icon: '🎯' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="inline-flex w-20 h-20 bg-linear-to-br from-purple-100 to-indigo-100 rounded-full items-center justify-center text-4xl mb-6 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-5xl font-bold text-purple-200 mb-4">{item.step}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-4xl text-purple-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Howitworkssection