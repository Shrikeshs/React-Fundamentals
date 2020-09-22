import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">

            <Link to={`/users/${props.product.id}`} >
                <div
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageUrl}')`
                    }}
                    className=" w-full h-64 bg-blue bg-cover"
                >

                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold mb-3 text-xl">
                    <Link to={`users/${props.product.id}`}>
                        {props.product.name}
                    </Link>
                </h3>
                <div className="text-2xl font-bold mb-3">
                    $ {props.product.price}
                </div>
                <div className="mb-3">
                    {props.product.description}

                </div>
                <Link
                to={`users/${props.product.id}`}
                className="bg-blue-500 flex text-white p-2 justify-center"
                >
                View
                </Link>
            </div>
        </div>
    )
}
export default ProductCard;