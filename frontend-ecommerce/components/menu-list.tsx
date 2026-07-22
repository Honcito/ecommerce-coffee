"use client";

import * as React from "react";
import Link from "next/link";
import { Compass, Percent, Plus, Store } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café en grano",
    href: "/category/grano",
    description:
      "Granos selectos tostados al punto perfecto. Ideal para los amantes del ritual del café recién molido, conservando toda su frescura, aroma y aceites esenciales.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "La molienda exacta lista para tu cafetera favorita, ya sea moka, prensa francesa o goteo. Sabor intenso y conveniencia sin perder la calidad del origen.",
  },
  {
    title: "Café en cápsulas",
    href: "/category/capsula",
    description:
      "La combinación perfecta de rapidez y consistencia. Cápsulas compatibles diseñadas para extraer un espresso denso, cremoso y lleno de matices en segundos.",
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-1 lg:w-150">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[500px] p-2">
  {/* COLUMNA IZQUIERDA: HongDev */}
  <li>
    <NavigationMenuLink
      render={
        <Link 
          href="/" 
          className="flex flex-col justify-between h-full p-3 rounded-md bg-accent/50 hover:bg-accent transition-colors group"
        >
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <Compass className="w-5 h-5" />
              <span>HongDev</span>
            </div>
            <p className="text-sm leading-snug text-muted-foreground">
              Sumérgete en el apasionante mundo del café con nuestra web.
            </p>
          </div>
        </Link>
      }
    />
  </li>

  {/* COLUMNA DERECHA: Lista de enlaces con título y texto debajo */}
  <li className="flex flex-col gap-1">
    <ul>
      {/* Item 1: Tienda */}
      <li>
        <NavigationMenuLink
          render={
            <Link 
              href="/shop" 
              className="flex flex-col p-2 rounded-md hover:bg-accent transition-colors group"
            >
              <div className="flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                <Store className="w-4 h-4" />
                <span>Tienda</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                Accede a toda la información, tus pedidos y mucho más.
              </p>
            </Link>
          }
        />
      </li>

      {/* Item 2: Ofertas */}
      <li>
        <NavigationMenuLink
          render={
            <Link 
              href="/offers" 
              className="flex flex-col p-2 rounded-md hover:bg-accent transition-colors group"
            >
              <div className="flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                <Percent className="w-4 h-4" />
                <span>Ofertas</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                Sección dedicada a promociones y descuentos especiales.
              </p>
            </Link>
          }
        />
      </li>

      {/* Item 3: Accesorios */}
      <li>
        <NavigationMenuLink
          render={
            <Link 
              href="/accesorios" 
              className="flex flex-col p-2 rounded-md hover:bg-accent transition-colors group"
            >
              <div className="flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                <Plus className="w-4 h-4" />
                <span>Accesorios</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </p>
            </Link>
          }
        />
      </li>
    </ul>
  </li>
</ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/docs">Docs</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuList;

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted- mb-2">{children}</div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
