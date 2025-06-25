import { useParams, Link } from 'react-router-dom'
import products from './data'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <div className="p-4 text-center">Produk tidak ditemukan.</div>

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline">← Kembali</Link>
      <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-lg mt-4 mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-indigo-700 mb-4">Rp {product.price.toLocaleString()}</p>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700">Pesan Sekarang</button>
    </div>
  )
}
