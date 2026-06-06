"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    Radio,
    RadioGroup,
    Spinner,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);

        const userData = Object.fromEntries(formData.entries());

        // const res = await fetch(
        //     `/api/check-email?email=${encodeURIComponent(userData.email)}`,
        // );

        // if (!res.ok) throw new Error("Check failed");

        // const { exists } = await res.json();

        // if (exists) {
        //     toast.error("An account with this email already exists.");
        //     setIsLoading(false);
        //     return;
        // }

        const { data, error } = await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            role: userData.role,
            createSession: false,
            callbackURL: "/sign-in",
        });
        if (error?.message) {
            toast.error(error.message);

            setIsLoading(false);

            return;
        }

        router.push("/sign-in");
        toast.success("Signup Successful!");
        setIsLoading(false);
    };
    return (
        <Form
            className="flex flex-col gap-4 generic-form_style auth-form"
            onSubmit={onSubmit}
        >
            {isLoading ? (
                <div className="flex items-center justify-center mb-5">
                    <Spinner color="accent" /> Signing Up
                </div>
            ) : (
                ""
            )}

            <TextField
                isRequired
                name="name"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label>Name</Label>
                <Input placeholder="Enter your full name" />
                <FieldError />
            </TextField>

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
                    if (value.length < 6) {
                        return "Password must be at least 6 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }

                    if (!/[a-z]/.test(value)) {
                        return "Password must contain at least one lowercase letter";
                    }
                    return null;
                }}
            >
                <Label>Password</Label>
                <InputGroup>
                    <InputGroup.Input
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
            <div className="flex flex-col gap-4">
                <Label>Role</Label>
                <RadioGroup
                    defaultValue="seeker"
                    name="role"
                    orientation="horizontal"
                >
                    <Radio value="seeker" selected>
                        <Radio.Control>
                            <Radio.Indicator />
                        </Radio.Control>
                        <Radio.Content>
                            <Label>Job Seeker</Label>
                        </Radio.Content>
                    </Radio>
                    <Radio value="recruiter">
                        <Radio.Control>
                            <Radio.Indicator />
                        </Radio.Control>
                        <Radio.Content>
                            <Label>Recruiter</Label>
                        </Radio.Content>
                    </Radio>
                </RadioGroup>
            </div>
            <div>
                <Button type="submit" className="w-full">
                    Register Account
                </Button>
            </div>
        </Form>
    );
};

export default RegisterForm;
