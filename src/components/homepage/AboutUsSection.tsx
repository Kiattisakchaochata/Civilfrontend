'use client';

export default function AboutUsSection() {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-[#1F2560]/5 border-b border-[#1F2560]/10">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2560] text-center">
            เกี่ยวกับเรา
          </h2>
          <p className="mt-3 text-center text-gray-600">
            ผู้เชี่ยวชาญงานพื้นอุตสาหกรรม ติดตั้ง–ซ่อมแซมพื้นผิวคอนกรีต โดยทีมวิศวกรโยธา
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Company names */}
        <div className="rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 text-center">
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F2560]">
            บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด
          </p>
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F2560] mt-1">
            บริษัท ซีวิล แอพพลิเคเตอร์ จำกัด
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFF6D6] px-4 py-2 border border-amber-200 text-[#1F2560]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
            <span className="font-semibold">
              ผลงานมากกว่า <span className="font-extrabold">1,000,000 ตร.ม.</span>
            </span>
          </div>
        </div>

        {/* Contact card */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#1F2560] mb-6">ข้อมูลติดต่อ</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: address & channels */}
            <dl className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">สำนักงานใหญ่/โกดัง</dt>
                  <dd className="mt-1 text-gray-800">
                    38/6 ม.2 ต.หน้าไม้ อ.ลาดหลุมแก้ว จ.ปทุมธานี 12140
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">โทร</dt>
                  <dd className="mt-1 text-gray-800 space-x-2">
                    <a href="tel:0845552781" className="font-medium hover:underline text-[#1F2560]">084-555-2781</a>
                    <span className="text-gray-400">/</span>
                    <a href="tel:0982512055" className="font-medium hover:underline text-[#1F2560]">098-251-2055</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">LINE ID</dt>
                  <dd className="mt-1 text-gray-800">civil7165</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">อีเมล</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:Civilproduct@hotmail.co.th"
                      className="text-[#1F2560] font-medium hover:underline break-all"
                    >
                      Civilproduct@hotmail.co.th
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Right: tax ids + CTA */}
            <div className="rounded-xl bg-white border border-gray-200 p-5">
              <h4 className="font-semibold text-[#1F2560] mb-3">เลขประจำตัวผู้เสียภาษี</h4>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1F2560]" />
                  <div>
                    <p className="font-medium">0125556009987</p>
                    <p className="text-sm text-gray-500">บจก. ซีวิล คอนสตรัคชั่น โปรดักส์</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1F2560]" />
                  <div>
                    <p className="font-medium">0125567032403</p>
                    <p className="text-sm text-gray-500">บจก. ซีวิล แอพพลิเคเตอร์ จำกัด</p>
                  </div>
                </li>
              </ul>

              <div className="mt-5">
                <a
                  href="https://m.me/715352691654101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1F2560] px-5 py-2.5 font-semibold text-[#1F2560] transition hover:bg-[#1F2560]"
                >
                  <span className="bg-gradient-to-r from-[#F9C525] to-amber-400 bg-clip-text text-transparent group-hover:text-white group-hover:bg-none">
                    ติดต่อเพื่อปรึกษางานฟรี
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#1F2560] group-hover:text-white">
                    <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42l9.3-9.29H14zM5 5h6v2H7v10h10v-4h2v6H5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional small note */}
        <p className="text-center text-sm text-gray-500">
          ข้อมูลการติดต่ออัปเดตล่าสุด • หากมีการเปลี่ยนแปลงจะแจ้งให้ทราบบนหน้าเว็บไซต์
        </p>
      </div>
    </section>
  );
}