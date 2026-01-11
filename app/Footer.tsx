"use client"


function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-linear-to-br from-purple-50 to-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🦷</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Dental AI</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                ผู้ช่วยทันตกรรมอัจฉริยะ ดูแลสุขภาพช่องปากของคุณด้วย AI
              </p>
            </div>
            
            {[
              { title: 'ผลิตภัณฑ์', links: ['ฟีเจอร์', 'ราคา', 'API'] },
              { title: 'บริษัท', links: ['เกี่ยวกับเรา', 'ติดต่อ', 'ร่วมงาน'] },
              { title: 'ข้อมูลทางกฎหมาย', links: ['นโยบายความเป็นส่วนตัว', 'เงื่อนไขการใช้งาน', 'คุกกี้'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-gray-900 mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-purple-100 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2026 Dental AI. All rights reserved. Made with 💜 for better smiles
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer