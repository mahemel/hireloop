import React from "react";
import PostJobForm from "./PostJobForm";
import { getUserSession } from "@/lib/core/session";
import { getRecruiterCompany } from "@/lib/api/companies";
import { redirect } from "next/navigation";

const PostJobPage = async () => {
    const user = await getUserSession();
    const company = (await getRecruiterCompany(user?.id)) || [];

    if (company.length === 0) {
        redirect("/dashboard/recruiter/company");

        return;
    }
    return (
        <div>
            <PostJobForm company={company}></PostJobForm>
        </div>
    );
};

export default PostJobPage;
