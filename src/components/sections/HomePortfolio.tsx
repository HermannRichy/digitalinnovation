import * as React from "react";
import { Button } from "@/src/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/components/ui/carousel";
import { Safari } from "@/src/components/magicui/safari";

export function HomePortfolio() {
    return (
        <>
            <section className="mt-20 lg:mt-40 mb-20 px-4 md:px-10 lg:px-24 lg:flex items-start justify-between">
                <h2 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Voir les réalisations <br /> de Digital Innovation
                </h2>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/services">
                        Voir nos services{" "}
                        <LucideArrowRight size={20} className="ml-6 md:ml-10" />
                    </Link>
                </Button>
            </section>
            <div className="px-4 md:px-10 lg:px-24">
                <Carousel
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem className="w-4/5 mx-auto lg:basis-1/2">
                            <Safari
                                url="virtualedgeagency.com"
                                className="size-full"
                                imageSrc="images/portfolio1.png"
                            />
                        </CarouselItem>
                        <CarouselItem className="w-4/5 mx-auto lg:basis-1/2">
                            <Safari
                                url="ceforaformation.com"
                                className="size-full"
                                imageSrc="images/portfolio2.png"
                            />
                        </CarouselItem>
                        <CarouselItem className="w-4/5 mx-auto lg:basis-1/2">
                            <Safari
                                url="hermann-richy.vercel.app"
                                className="size-full"
                                imageSrc="images/portfolio3.png"
                            />
                        </CarouselItem>
                        <CarouselItem className="w-4/5 mx-auto lg:basis-1/2">
                            <Safari
                                url="futurcraftinstitut.com"
                                className="size-full"
                                imageSrc="images/portfolio4.jpeg"
                            />
                        </CarouselItem>
                        <CarouselItem className="w-4/5 mx-auto lg:basis-1/2">
                            <Safari
                                url="oeilmobylpro.com"
                                className="size-full"
                                imageSrc="images/portfolio5.png"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:flex cursor-pointer" />
                    <CarouselNext className="hidden lg:flex cursor-pointer" />
                </Carousel>
            </div>
        </>
    );
}
