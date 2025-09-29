// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import ServiceModal from './ServiceModal'

// const services = [
//   {
//     title: 'ติดตั้งพื้น EPOXY',
//     type: 'ติดตั้ง',
//     image: '/images/epoxy1.png',
//     description: '“รู้จัก ‘พื้นอีพ็อกซี่’ พื้นสุดแกร่งที่ครองใจทุกอุตสาหกรรม” ...',
//     fullText: '“รู้จัก ‘พื้นอีพ็อกซี่’ พื้นสุดแกร่งที่ครองใจทุกอุตสาหกรรม” และใช้งานได้หลากหลาย ไม่ว่าจะในโรงงาน โกดัง หรือพื้นที่เชิงพาณิชย์ — พื้นอีพ็อกซี่คือคำตอบ!',
//   },
//   // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
// ]

// export default function Services() {
//   const [selected, setSelected] = useState(null)

//   return (
//     <section className="bg-white py-12">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold mb-6 text-gray-800">งานติดตั้ง</h2>

//     <div className="grid md:grid-cols-3 gap-6">
//       {services.map((service, idx) => (
//         <div
//           key={idx}
//           className="bg-gray-100 shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300"
//         >
//           <div className="relative h-48">
//             <Image
//               src={service.image || '/images/fallback.png'}
//               alt={service.title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-lg"
//               onError={(e) => {
//                 e.currentTarget.src = '/images/fallback.png'
//               }}
//             />
//           </div>
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
//             <p className="text-sm text-gray-700 mb-2">
//               {service.description.substring(0, 50)}...
//             </p>
//             <button
//               onClick={() => setSelected(service)}
//               className="mt-2 bg-yellow-400 text-black font-bold py-1 px-3 rounded"
//             >
//               คลิกดูเพิ่มเติม
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     {selected && (
//       <ServiceModal
//         service={selected}
//         onClose={() => setSelected(null)}
//       />
//     )}
//   </div>
// </section>
//   )
// }