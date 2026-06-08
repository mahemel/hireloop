"use client";
import BriefcaseMagnifier from "@gravity-ui/icons/BriefcaseFill";
import ChartColumn from "@gravity-ui/icons/ChartColumn";
import PersonMagnifier from "@gravity-ui/icons/PersonMagnifier";
import Star from "@gravity-ui/icons/Star";
import Image from "next/image";

const stats = [
    {
        icon: BriefcaseMagnifier,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: ChartColumn,
        value: "12K",
        label: "Companies",
    },
    {
        icon: PersonMagnifier,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: Star,
        value: "97%",
        label: "Satisfication Rate",
    },
];

const BannerBottom = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black pb-5 px-4 md:px-8 pt-70">
            <Image
                src="/assets/globe.png"
                alt="Globe Image"
                width={1000}
                height={400}
                aria-hidden="true"
                className="absolute inset-0 w-11/12 left-1/2 -translate-x-1/2 h-full object-cover select-none pointer-events-none"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

            <div className="relative w-full flex items-end justify-center">
                <div className="relative z-10 text-center px-4 pb-8 md:pb-12">
                    <p className="text-white/70 text-2xl md:text-4xl font-light leading-snug max-w-2xl mx-auto">
                        Assisting over{" "}
                        <span className="text-white font-semibold">
                            15,000 job seekers
                        </span>
                        <br />
                        find their dream positions.
                    </p>
                </div>
            </div>

            <div className="relative z-10 -mt-2">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div
                            key={label}
                            className="bg-linear-to-b from-[#010102] to-[#313131] rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-8 transition-colors"
                        >
                            <div className="text-white">
                                <Icon width={22} height={22} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <span
                                    animate={{ rotate: 45 }}
                                    className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-none"
                                >
                                    {value}
                                </span>
                                <span className="text-sm mt-1 text-white">
                                    {label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerBottom;
