"use client"

import { Heart, ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import MenuList from './menu-list';
import { ItemsMenuMobile } from './items-menu-mobile';
import ToggleTheme from '@/components/ui/toggle-theme'

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 mx-auto w-full sm:max-w-4xl md:max-w-6xl">
      {/* 1. IZQUIERDA: LOGO */}
      <h1 
        className="text-3xl cursor-pointer select-none" 
        onClick={() => router.push("/")}
      >
        Hong
        <span className="font-bold text-neutral-400">Dev</span>
      </h1>

      {/* 2. CENTRO: MENÚS (Intercambiables según el tamaño de pantalla) */}
      <div className="flex items-center gap-4">
        {/* Menú visible solo en Escritorio */}
        <div className="hidden sm:flex items-center gap-6">
          <MenuList />
        </div>

        {/* Menú visible solo en Móvil */}
        <div className="flex sm:hidden items-center gap-2">
          <ItemsMenuMobile />
        </div>
      </div>

      {/* 3. DERECHA: ACCIONES / CARRITO (Siempre en la esquina derecha) */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ShoppingCart 
          strokeWidth={1.5} 
          className="cursor-pointer hover:text-neutral-500 transition-colors" 
          onClick={() => router.push("/cart")} 
        />
        < Heart 
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />
        <User strokeWidth={1} className="cursor-pointer" />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;