export type Locale = 'th' | 'en' | 'zh'

export type BlogPost = {
  slug: string
  image: string
  date: string
  readTime: Record<Locale, string>
  category: Record<Locale, string>
  title: Record<Locale, string>
  excerpt: Record<Locale, string>
  content: Record<Locale, string[]>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'epoxy-vs-pu-flooring',
    image: '/images/pu1.png',
    date: '2026-07-07',
    readTime: { th: 'อ่าน 5 นาที', en: '5 min read', zh: '阅读 5 分钟' },
    category: {
      th: 'พื้นอุตสาหกรรม',
      en: 'Industrial Flooring',
      zh: '工业地坪',
    },
    title: {
      th: 'พื้น Epoxy กับ PU ต่างกันอย่างไร เลือกแบบไหนดีสำหรับโรงงาน',
      en: 'Epoxy vs PU Flooring: Which One Is Better for Factories?',
      zh: 'Epoxy 与 PU 地坪有什么区别？工厂应如何选择？',
    },
    excerpt: {
      th: 'เปรียบเทียบพื้น Epoxy และ PU สำหรับโรงงาน โกดัง ห้องผลิต และพื้นที่ใช้งานหนัก เพื่อช่วยเลือกวัสดุให้เหมาะกับหน้างานจริง',
      en: 'A practical comparison of Epoxy and PU flooring for factories, warehouses, production rooms, and heavy-duty areas.',
      zh: '比较 Epoxy 与 PU 地坪在工厂、仓库、生产区域和重载区域中的应用，帮助选择合适的地坪系统。',
    },
    content: {
      th: [
        'พื้น Epoxy และ PU เป็นระบบพื้นที่นิยมใช้ในโรงงานอุตสาหกรรม เพราะช่วยให้พื้นมีความสวยงาม ทำความสะอาดง่าย และทนต่อการใช้งานมากกว่าพื้นคอนกรีตทั่วไป',
        'พื้น Epoxy เหมาะกับพื้นที่ที่ต้องการความเรียบ เงา สวยงาม และดูแลรักษาง่าย เช่น โรงงานทั่วไป โกดัง ห้องบรรจุสินค้า และศูนย์บริการ',
        'พื้น PU เหมาะกับพื้นที่ที่ต้องการความทนทานสูงกว่า เช่น พื้นที่เปียก พื้นที่มีการเปลี่ยนแปลงอุณหภูมิ หรืออุตสาหกรรมอาหารและเครื่องดื่ม',
      ],
      en: [
        'Epoxy and PU flooring systems are widely used in industrial facilities because they improve surface durability, cleanliness, and maintenance compared with standard concrete floors.',
        'Epoxy flooring is suitable for areas that require a smooth, glossy, easy-to-clean surface such as general factories, warehouses, packing rooms, and service centers.',
        'PU flooring is better for areas that require higher durability, moisture resistance, temperature changes, or food and beverage production environments.',
      ],
      zh: [
        'Epoxy 和 PU 地坪广泛应用于工业场所，可提升地面耐久性、清洁度及维护效率。',
        'Epoxy 地坪适合需要平整、美观、易清洁表面的区域，例如一般工厂、仓库、包装车间及服务中心。',
        'PU 地坪更适合潮湿区域、温度变化较大的区域，以及食品和饮料生产环境。',
      ],
    },
  },
  {
    slug: 'floor-hardener-benefits',
    image: '/images/hardener.png',
    date: '2026-07-07',
    readTime: { th: 'อ่าน 4 นาที', en: '4 min read', zh: '阅读 4 分钟' },
    category: {
      th: 'Floor Hardener',
      en: 'Floor Hardener',
      zh: '耐磨地坪',
    },
    title: {
      th: 'Floor Hardener คืออะไร เหมาะกับพื้นที่แบบไหน',
      en: 'What Is Floor Hardener and Where Should It Be Used?',
      zh: '什么是 Floor Hardener？适用于哪些区域？',
    },
    excerpt: {
      th: 'ทำความเข้าใจระบบพื้น Floor Hardener สำหรับโรงงาน โกดัง ลานจอดรถ และพื้นที่ที่ต้องรับแรงเสียดสีหรือแรงขูดลากเป็นประจำ',
      en: 'Understand Floor Hardener systems for factories, warehouses, parking areas, and spaces exposed to abrasion or dragging.',
      zh: '了解 Floor Hardener 地坪系统，适用于工厂、仓库、停车场及经常承受摩擦或拖拉的区域。',
    },
    content: {
      th: [
        'Floor Hardener คือวัสดุเพิ่มความแข็งแรงให้ผิวหน้าคอนกรีต โดยโรยลงบนคอนกรีตสดและขัดให้เป็นเนื้อเดียวกับพื้น',
        'ระบบนี้ช่วยเพิ่มความทนทานต่อการเสียดสี ลดการเกิดฝุ่น และทำให้พื้นเหมาะกับพื้นที่ใช้งานหนัก เช่น โรงงาน โกดัง คลังสินค้า และลานจอดรถ',
      ],
      en: [
        'Floor Hardener is a material used to strengthen the concrete surface by applying it onto fresh concrete and power-troweling it into the slab.',
        'It improves abrasion resistance, reduces dust, and is suitable for heavy-duty areas such as factories, warehouses, storage areas, and parking spaces.',
      ],
      zh: [
        'Floor Hardener 是一种用于增强混凝土表面强度的材料，施工时撒布在新浇筑混凝土表面并机械抹平。',
        '该系统可提高耐磨性、减少起尘，适用于工厂、仓库、物流中心及停车场等重载区域。',
      ],
    },
  },
  {
    slug: 'waterproofing-roof-deck',
    image: '/images/pu2.png',
    date: '2026-07-07',
    readTime: { th: 'อ่าน 4 นาที', en: '4 min read', zh: '阅读 4 分钟' },
    category: {
      th: 'ระบบกันซึม',
      en: 'Waterproofing',
      zh: '防水系统',
    },
    title: {
      th: 'ระบบกันซึมดาดฟ้าคอนกรีต สำคัญอย่างไร',
      en: 'Why Concrete Roof Deck Waterproofing Is Important',
      zh: '混凝土屋面防水系统为什么重要？',
    },
    excerpt: {
      th: 'ปัญหาน้ำรั่วซึมจากดาดฟ้าคอนกรีตเกิดจากรอยแตกร้าวและการเปลี่ยนแปลงอุณหภูมิ การเลือกวัสดุกันซึมที่เหมาะสมช่วยยืดอายุอาคารได้',
      en: 'Concrete roof leakage is often caused by cracks and temperature changes. Choosing the right waterproofing system helps extend building life.',
      zh: '混凝土屋面渗漏通常由裂缝和温度变化引起，选择合适的防水系统可延长建筑寿命。',
    },
    content: {
      th: [
        'ดาดฟ้าคอนกรีตเป็นพื้นที่ที่ต้องเผชิญกับแดด ฝน และการเปลี่ยนแปลงอุณหภูมิตลอดเวลา ทำให้เกิดการแตกร้าวและน้ำรั่วซึมได้ง่าย',
        'ระบบกันซึมที่ดีควรมีความยืดหยุ่นสูง ยึดเกาะพื้นผิวได้ดี และสามารถรองรับการขยายตัวหรือหดตัวของโครงสร้างได้',
      ],
      en: [
        'Concrete roof decks are exposed to sunlight, rain, and temperature changes, which can lead to cracking and water leakage over time.',
        'A good waterproofing system should provide flexibility, strong adhesion, and the ability to handle structural movement.',
      ],
      zh: [
        '混凝土屋面长期暴露于阳光、雨水和温度变化下，容易产生裂缝并导致渗漏。',
        '优质防水系统应具备高弹性、良好附着力，并能适应结构伸缩变化。',
      ],
    },
  },
]