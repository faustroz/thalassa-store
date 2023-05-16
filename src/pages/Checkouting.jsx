import { ShopContext } from "../context/shop-context"
import { useContext } from "react"
import './Checkouting.css'

const Checkouting = () => {
  const { getTotalCartAmount } = useContext(ShopContext)

  return (
    <div className="Checkouting">
      <h1>hai</h1> 
      {/* disini taruh list barang yang sudah dipesen, baru ke whatsapp kata dewa i */}
      <h1>{getTotalCartAmount}</h1>
      <button className="checkout">checkout</button>
    </div>
  )
}

export default Checkouting;