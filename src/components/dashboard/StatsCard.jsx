import { EyeClosed, FileText, Persons, Thunderbolt } from "@gravity-ui/icons";

const StatsCard = () => {
    const stats = [
        {
            icon: FileText,
            value: "48",
            label: "Total Job Posts",
        },
        {
            icon: Persons,
            value: "1,284",
            label: "Total Applicants",
        },
        {
            icon: Thunderbolt,
            value: "18",
            label: "Active Jobs",
        },
        {
            icon: EyeClosed,
            value: "32",
            label: "Jobs Closed",
        },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-5">
            {stats.map(({ icon: Icon, value, label }) => (
                <div
                    key={label}
                    className="bg-[#313131] rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-8 transition-colors"
                >
                    <div className="text-white">
                        <Icon width={22} height={22} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm mt-1 text-white">{label}</span>
                        <span className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-none">
                            {value}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCard;
