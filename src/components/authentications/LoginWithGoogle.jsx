"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <Button
            className="w-full h-10 rounded-lg"
            variant="tertiary"
            onClick={handleGoogleLogin}
        >
            <FcGoogle />
            Sign In with Google
        </Button>
    );
};

export default LoginWithGoogle;
