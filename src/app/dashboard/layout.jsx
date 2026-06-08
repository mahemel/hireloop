import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <div className="flex-1 p-5">{children}</div>
        </div>
    );
};

export default DashboardLayout;
