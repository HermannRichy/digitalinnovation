import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/src/components/ui/breadcrumb";

interface BreadcrumbItemProps {
    label: string;
    url?: string;
}

interface HeroTitleProps {
    pageTitle: string;
    breadcrumbs: BreadcrumbItemProps[];
}

export function HeroTitle({ pageTitle, breadcrumbs }: HeroTitleProps) {
    return (
        <section className="flex flex-col gap-y-4 items-center text-center md:w-2/3 md:mx-auto mt-20 mb-32 py-14 px-4 md:px-10 lg:px-24">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl text-primary">
                {pageTitle}
            </h1>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((item, index) => (
                        <BreadcrumbItem key={index}>
                            {item.url ? (
                                <BreadcrumbLink
                                    href={item.url}
                                    className="text-sm lg:text-lg text-center font-medium hover:text-primary"
                                >
                                    {item.label}
                                </BreadcrumbLink>
                            ) : (
                                <span className="text-sm font-medium">
                                    {item.label}
                                </span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <BreadcrumbSeparator className="text-gray-400">
                                    /
                                </BreadcrumbSeparator>
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    );
}
