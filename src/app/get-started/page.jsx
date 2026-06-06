import LoginWithGoogle from "@/components/authentications/LoginWithGoogle";
import RegisterForm from "@/components/authentications/RegisterForm";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
    title: "HireLoop | Register",
};
const RegisterPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (session) {
        redirect("/");
    }

    return (
        <div className="px-4 py-10">
            <Card className="w-full max-w-md mx-auto rounded-xl p-6">
                <div className="flex flex-col items-center gap-2 mb-4">
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
                    <span className="font-semibold text-black text-sm leading-tight hidden sm:block">
                        HireLoop
                    </span>
                    <h2 className="font-bold text-xl">Create an Account</h2>
                    <p>Join HireLoop to start your journey</p>
                </div>

                <RegisterForm />

                <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-[12px] text-gray-500 uppercase">
                        Or continue with
                    </span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <LoginWithGoogle></LoginWithGoogle>

                <p className="text-center mt-3 flex gap-1 justify-center text-sm md:text-base">
                    Already have an account?
                    <Link
                        href={"/sign-in"}
                        className="text-dark-blue font-semibold underline"
                    >
                        Sign in
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default RegisterPage;
