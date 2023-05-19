import './cart.css'
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="checkout">
                <button onClick={() => navigate('/checkout')}>Pesan Sekarang!</button>
            </div>
        </div>
        
    );
}

export default Cart;