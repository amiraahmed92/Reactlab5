import { useContext } from "react";
import { ApiContext } from "../contexts";

export const useCreatePosts = () => {
    const apiContext = useContext(ApiContext);
    return async () => {
    const { data } = await apiContext.get("/posts");
    return data;
    };
};