import React from 'react'
import { IoBagHandle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartItems = useSelector((state) => state.cartItems.cart);
    const uniqueCount = cartItems.length;

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4 shadow-lg bg-white">

            <Link to="/" className="shrink-0">
                <div className="flex items-center gap-2 cursor-pointer font-bold text-2xl md:text-3xl whitespace-nowrap">
                    <IoBagHandle />
                    <h3>Mart</h3>
                </div>
            </Link>

            <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-8 text-sm sm:text-base md:text-lg">

                <Link to="/"><h3>Home</h3></Link>

                <Link to="/shop"><h3>Shop</h3></Link>

                <Link to="/cart"><h3>Cart</h3></Link>

                <h3 className="text-xl">
                    <CgProfile />
                </h3>

                <Link to="/cart" className="relative">
                    <FaShoppingCart className="text-xl" />
                    <span className="absolute -top-3 -right-3 bg-blue-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {uniqueCount}
                    </span>
                </Link>

            </div>
        </div>
    );
}
