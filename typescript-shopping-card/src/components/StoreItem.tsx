import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (

        <div className="mt-auto">
            {quantity === 0 ? (
                <button className="w-100" onClick={() => increaseCartQuantity(id)}>
                    + Add To Cart
                </button>
            ) : (
                <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: ".5rem" }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ gap: ".5rem" }}
                    >
                        <button onClick={() => decreaseCartQuantity(id)}>-</button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <button onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                    <button
                        onClick={() => removeFromCart(id)}
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>

    )
}