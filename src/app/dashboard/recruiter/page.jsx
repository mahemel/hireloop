"use client";
import StatsCard from "@/components/dashboard/StatsCard";
import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";

const RecruiterDashboardPage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="w-10 flex mt-5 mx-auto">
                <Spinner />
            </div>
        );
    }
    const user = session?.user;

    return (
        <div>
            <h2 className="heading-2">Welcome back, {user.name}!</h2>

            <StatsCard></StatsCard>
        </div>
    );
};

export default RecruiterDashboardPage;
