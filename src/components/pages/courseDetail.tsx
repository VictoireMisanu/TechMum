import { useState } from "react"
// import Image from "next/image"

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("XXL")

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="relative aspect-square">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="T-shirt Kratos"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">T-shirt Venu dailleurs divinité Kratos-blanc</h1>

          <p className="text-2xl font-semibold text-gray-900 mb-6">$ 25,00</p>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="mr-4 font-medium">Quatité :</span>
              <div className="flex items-center">
                <button onClick={decreaseQuantity} className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                  -
                </button>
                <div className="w-12 h-8 bg-gray-100 flex items-center justify-center">{quantity}</div>
                <button onClick={increaseQuantity} className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <span className="mr-4 font-medium">Taille :</span>
              <div className="relative">
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="appearance-none bg-gray-100 border-none py-2 pl-4 pr-10 w-24"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
            Commander
          </button>

          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold">T-shirt divinité Kratos blanc;</h2>
            <p className="text-gray-700">100 coton; nos articles son t made in kinshasa</p>

            <p className="text-gray-600 text-sm">
              jndkkl,slk jclskldlkdklvsdksdv klnlkdsklsdkldsklkldklsdvksdv lkkdkkklklklf
            </p>

            <p className="text-gray-600 text-sm">
              kclkkklsklllkfkcnklvnklnvkl,v;vvnjb njjjjngggghhhh hdys fvjfhvjfbvbhfjkjkkkcnnnhdhhhdhhdjjjjjj
            </p>

            <p className="text-gray-600 text-sm">
              fkjhbcbbcbncnncnncncnncccccccdsfsdsdsvsddvs vfvfvfbbbbbbbbbbbbbbbfffffddljfhhfkflll
            </p>

            <p className="text-gray-600 text-sm">ffffvhjvnnvnvnnvnvn</p>
          </div>
        </div>
      </div>
    </div>
  )
}
