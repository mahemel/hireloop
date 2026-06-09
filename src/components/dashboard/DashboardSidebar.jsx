import {
    Bell,
    Briefcase,
    Envelope,
    Gear,
    House,
    LayoutSideContentLeft,
    Magnifier,
    Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
// import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
    // const pathname = usePathname();

    const navItems = [
        { icon: House, href: "/dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
        {
            icon: Bell,
            href: "/dashboard/recruiter/jobs/new",
            label: "Post a Job",
        },
        {
            icon: Briefcase,
            href: "/dashboard/recruiter/company",
            label: "Company Profile",
        },
        {
            icon: Envelope,
            href: "/dashboard/recruiter/jobs/new",
            label: "Messages",
        },
        {
            icon: Person,
            href: "/dashboard/recruiter/jobs/new",
            label: "Profile",
        },
        {
            icon: Gear,
            href: "/dashboard/recruiter/jobs/new",
            label: "Settings",
        },
    ];

    const navContent = (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    href={item.href}
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>

            <Drawer>
                <Button variant="secondary" className="lg:hidden">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>{navContent}</Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
};

export default DashboardSidebar;
