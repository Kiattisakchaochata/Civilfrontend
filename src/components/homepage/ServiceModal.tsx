import Image from 'next/image'

type ServiceItem = {
  title: string
  image: string
  fullText: string
}

type ServiceModalProps = {
  service: ServiceItem
  onClose: () => void
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>

        <Image
          src={service.image || '/images/fallback.png'}
          alt={service.title}
          width={800}
          height={500}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-500 mb-3">{service.title}</h3>
          <p className="text-gray-800 text-sm">{service.fullText}</p>
        </div>
      </div>
    </div>
  )
}