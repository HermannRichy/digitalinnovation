import {
    IconBrandFigma,
    IconBrandGoogle,
    IconBrandMeta,
    IconBrandNextjs,
    IconBrandOpenai,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandWebflow,
    IconBrandWordpress,
} from "@tabler/icons-react";
import { OrbitingCircles } from "@/src/components/magicui/orbiting-circles";
export function OrbitingFeatures() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                <IconBrandNextjs />
                <IconBrandReact />
                <IconBrandTailwind />
                <IconBrandWebflow />
                <IconBrandWordpress />
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                <IconBrandMeta />
                <IconBrandOpenai />
                <IconBrandGoogle />
                <IconBrandFigma />
            </OrbitingCircles>
        </div>
    );
}
