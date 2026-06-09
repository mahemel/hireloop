import { serverFetch } from "../core/server";

export const getUserPlanById = async (id) => {
    return serverFetch(`/api/user/${id}`);
}