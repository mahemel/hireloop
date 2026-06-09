"use client";

import { useState } from "react";
import { Button, Link, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const navLinks = [
        { label: "Browse Jobs", href: "/jobs" },
        { label: "Companies", href: "/company" },
        { label: "Pricing", href: "/pricing" },
    ];

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                },
            },
        });
    };

    return (
        <nav className="w-full bg-[#1a1a1f] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 no-underline"
                >
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-900/40 shrink-0">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <polygon points="4,2 14,8 4,14" fill="white" />
                        </svg>
                    </div>
                    <span className="font-semibold text-white text-sm leading-tight hidden sm:block">
                        HireLoop
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-xl px-3 py-1.5">
                    <div className="flex items-center gap-1 ">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-zinc-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10 no-underline"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="w-px h-5 bg-white/20 mx-1" />
                    {isPending ? (
                        <Spinner />
                    ) : session?.user.name ? (
                        <Button onClick={handleSignOut}>Sign out</Button>
                    ) : (
                        <>
                            <Link
                                href="/sign-in"
                                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors px-3 no-underline"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/get-started"
                                className="bg-white text-black font-semibold text-sm rounded-xl px-5 h-10 flex items-center hover:bg-zinc-100 transition-colors shadow-sm no-underline"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                <div className="flex md:hidden items-center gap-3">
                    <Link
                        href="/sign-in"
                        className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors no-underline"
                    >
                        Sign In
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-zinc-300 hover:text-white transition-colors p-1"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#1a1a1f] border-t border-white/5 px-4 pt-3 pb-5 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base text-zinc-300 hover:text-white transition-colors py-2.5 px-3 rounded-xl hover:bg-white/8 no-underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/get-started"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-3 bg-white text-black font-semibold text-sm rounded-xl h-11 flex items-center justify-center hover:bg-zinc-100 transition-colors no-underline"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
