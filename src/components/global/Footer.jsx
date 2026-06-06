import Link from "next/link";
import LogoFacebook from "@gravity-ui/icons/LogoFacebook";
import LogoLinkedin from "@gravity-ui/icons/LogoLinkedin";

const footerLinks = {
    Product: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary" },
    ],
    Navigations: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/career-library" },
        { label: "Contact", href: "/contact" },
    ],
    Resources: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/newsroom" },
    ],
};

const PinterestIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.498 2.126-4.498 4.322 0 .856.33 1.773.741 2.274a.3.3 0 0 1 .069.286c-.076.315-.244.995-.277 1.134-.044.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446C17.523 22 22 17.523 22 12S17.523 2 12 2z" />
    </svg>
);

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: <LogoFacebook width={18} height={18} />,
        bg: "bg-[#1a1a1f]",
    },
    {
        label: "Pinterest",
        href: "https://pinterest.com",
        icon: <PinterestIcon />,
        bg: "bg-linear-to-br from-violet-500 to-purple-700",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: <LogoLinkedin width={18} height={18} />,
        bg: "bg-[#1a1a1f]",
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#0e0e11] border-t border-white/5 mt-auto text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="py-14 flex justify-between gap-10 md:gap-8">
                    <div className="flex flex-col gap-5 md:col-span-1">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 no-underline w-fit"
                        >
                            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-900/40 shrink-0">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <polygon
                                        points="4,2 14,8 4,14"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span className="font-semibold text-white text-sm leading-tight">
                                HeroLoop
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-55">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>
                    </div>

                    <div className="flex flex-1 flex-col md:flex-row justify-end  gap-10 md:gap-16">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div
                                key={title}
                                className="flex flex-col gap-5 w-40"
                            >
                                <h3 className="text-violet-500 font-medium text-sm">
                                    {title}
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="hover:text-violet-500 text-sm transition-colors no-underline"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        {socialLinks.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className={`w-9 h-9 rounded-lg ${s.bg} border border-white/10 flex items-center justify-center text-white hover:brightness-125 transition-all`}
                            >
                                {s.icon}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6   text-sm">
                        <span>
                            Copyright {new Date().getFullYear()} — HireLoop
                        </span>
                        <div className="flex items-center gap-3">
                            <Link
                                href="/terms"
                                className="hover:text-zinc-300 transition-colors no-underline"
                            >
                                Terms &amp; Policy
                            </Link>
                            <span>-</span>
                            <Link
                                href="/privacy"
                                className="hover:text-zinc-300 transition-colors no-underline"
                            >
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
