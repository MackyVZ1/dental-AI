"use client"
import React from 'react'

function Featuresection() {
    const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'วิเคราะห์สภาพฟันและช่องปากด้วย AI ที่แม่นยำ ให้คำแนะนำเฉพาะบุคคล',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '⚡',
      title: 'Instant Consultation',
      description: 'รับคำปรึกษาทันตกรรมแบบเรียลไทม์ ตอบคำถามได้ทันที 24/7',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'ข้อมูลของคุณปลอดภัย เข้ารหัสระดับสูง รักษาความเป็นส่วนตัว',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: 'Health Tracking',
      description: 'ติดตามสุขภาพช่องปากของคุณ บันทึกประวัติการรักษา',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: '💡',
      title: 'Smart Recommendations',
      description: 'คำแนะนำที่ชุ่มฉ่ำสำหรับการดูแลสุขภาพช่องปากของคุณ',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: '🎯',
      title: 'Personalized Care',
      description: 'แผนการดูแลที่ปรับแต่งเฉพาะคุณ ตามความต้องการของแต่ละบุคคล',
      gradient: 'from-green-500 to-purple-500'
    }
  ];
  return (
     <section id="features" className="py-20 px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ฟีเจอร์ที่ทรงพลัง
            </h3>
            <p className="text-xl text-gray-600">
              เทคโนโลยี AI ที่ออกแบบมาเพื่อดูแลสุขภาพช่องปากของคุณ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className={`inline-flex w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Featuresection