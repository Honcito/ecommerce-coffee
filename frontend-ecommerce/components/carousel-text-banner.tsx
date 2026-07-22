"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description:
      "Disfruta de entregas ultrarrápidas y prioridad absoluta en todos tus pedidos haciéndote cliente VIP.",
    link: "#",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a 40€",
    description:
      "¡Ahorra más en grande! Desbloquea hasta un -28% a partir de 100€ o -25% desde 150€ aplicando tu cupón al finalizar.",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Compra con total tranquilidad. Disfruta de envío a coste cero y devoluciones sin complicaciones en tu plan.",
    link: "#",
  },
  {
    id: 4,
    title: "Comprar novedades",
    description:
      "Descubre los lanzamientos más recientes de la temporada a mitad de precio por tiempo limitado.",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();

  return (
    // 1. Añadimos px-4 para separar todo el banner de las paredes de la pantalla en móvil
    <div className="px-4 py-2 w-full">
      <div className="bg-secondary dark:bg-primary rounded-xl flex items-center justify-center max-w-3xl mx-auto overflow-hidden">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {dataCarouselTop.map(({ id, title, link, description }) => (
              <CarouselItem
                key={id}
                onClick={() => router.push(link)}
                className="cursor-pointer"
              >
                {/* 2. Añadimos px-4 sm:px-8 dentro de la card para que el texto no toque las esquinas redondeadas */}
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center items-center px-4 py-3 sm:px-8 sm:py-4 text-center">
                    <p className="text-base sm:text-lg font-bold text-foreground dark:text-primary-foreground mb-1 sm:mb-2 leading-tight">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-primary-foreground/80 leading-relaxed max-w-xl">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselTextBanner;