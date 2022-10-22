import { callExternalApi } from "./callExternalApi";

const apiServerUrl = process.env.REACT_APP_SERVER_URL

export const getPublicAccess = async () => {
    const config = {
        url: `${apiServerUrl}/login/public`,
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getPrivateAccess = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/login/private`,
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getPrivateAccessVip = async (accessToken) => {
    const config = {
        url: `${apiServerUrl}/login/private/admin`,
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};