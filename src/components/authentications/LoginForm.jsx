"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: redirectTo,
        });

        if (error?.message) {
            toast.error(error.message);
            return;
        }
    };
    return (
        <Form
            className="flex flex-col gap-4 generic-form_style auth-form"
            onSubmit={onSubmit}
        >
            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="you@example.com" />
                <FieldError />
            </TextField>

            <TextField
                className="w-full"
                name="password"
                isRequired
                validate={(value) => {
                    if (!value || value.length === 0) {
                        return "Please enter your password";
                    }
                }}
            >
                <Label>Password</Label>
                <InputGroup>
                    <InputGroup.Input
                        className="shadow-none border-0"
                        type={isVisible ? "text" : "password"}
                        placeholder="Enter your password"
                    />
                    <InputGroup.Suffix className="pr-0">
                        <Button
                            isIconOnly
                            aria-label={
                                isVisible ? "Hide password" : "Show password"
                            }
                            size="sm"
                            variant="ghost"
                            onPress={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? (
                                <IoEyeOutline className="size-4" />
                            ) : (
                                <IoIosEyeOff className="size-4" />
                            )}
                        </Button>
                    </InputGroup.Suffix>
                </InputGroup>
                <FieldError />
            </TextField>

            <p className="text-sm text-dark-blue font-semibold">
                <Link href="/forgot-password">Forgot Password?</Link>
            </p>

            <div>
                <Button type="submit" className="w-full">
                    Sign In
                </Button>
            </div>
        </Form>
    );
};

export default LoginForm;
