import { useContext } from "react";
import { ApiContext } from "../contexts";

export const usePostPosts = () => {
    const apiContext = useContext(ApiContext);
    return async (body) => {
    await apiContext.post("/posts",body);

    };
};