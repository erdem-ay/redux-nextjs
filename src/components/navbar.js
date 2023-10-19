"use client"
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "@/stores/user";
import { selectBasket } from "@/stores/basket";

const Navbar = () => {
  const user = useSelector(selectUser);
  const basket = useSelector(selectBasket);

  return (
    <div>
      Active user: <b>{user.name}</b>
      <div>
        Toplam ürün: <b>{basket.length}</b>
      </div>
    </div>
  )
}

export default Navbar