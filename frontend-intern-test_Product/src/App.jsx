import { Link } from 'react-router-dom'
import products from './data'

export default function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Produk Elektronik</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="border rounded-xl p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
            <p className="text-lg font-bold text-indigo-600 mt-2">Rp {product.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
