'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero bar */}
      <div className="bg-[#1F2560]/5 border-b border-[#1F2560]/10">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F2560]">
            เกี่ยวกับเรา
          </h1>
          <p className="mt-3 text-gray-600">
            ผู้เชี่ยวชาญงานพื้นอุตสาหกรรม ติดตั้ง–ซ่อมแซมพื้นผิวคอนกรีต โดยทีมวิศวกรโยธา
          </p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Company names */}
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F2560]">
              บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด
            </p>
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F2560] mt-1">
              บริษัท ซีวิล แอพพลิเคเตอร์ จำกัด
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              ผู้เชี่ยวชาญด้านงานติดตั้งพื้นระบบต่าง ๆ โดยทีมวิศวกรโยธาและช่างผู้มีประสบการณ์
              ได้รับความไว้วางใจจากองค์กรชั้นนำ ผลงานมากกว่า
              <span className="font-semibold"> 1,000,000 ตร.ม.</span>
            </p>
          </div>
        </div>

        {/* Contact + Info card */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#1F2560] mb-6">ข้อมูลติดต่อ / บริษัท</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ซ้าย: ที่อยู่ & ช่องทางติดต่อ */}
            <dl className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">ที่ตั้งสำนักงานใหญ่/โกดัง</dt>
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

            {/* ขวา: เลขผู้เสียภาษี */}
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

              {/* CTA */}
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

        {/* Services bullets (เดิม) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2560]">
            งานบริการของเรา
          </h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {[
              'ติดตั้งพื้น LIQUID HARDENER',
              'ติดตั้งพื้น FLOOR HARDENER',
              'ติดตั้งพื้น EPOXY, PU',
              'งาน CEMENT SELF LEVELING',
              'ติดตั้งระบบกันซึมดาดฟ้าคอนกรีต WATERPROOF',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 p-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F9C525] text-[#1F2560] font-bold text-xs">✓</span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-[#1F2560]/5 border border-[#1F2560]/10 p-4">
            <p className="text-[#1F2560] font-semibold">
              ทีมวิศวกรโยธาพร้อมให้คำปรึกษาและลงสำรวจหน้างานฟรี
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}