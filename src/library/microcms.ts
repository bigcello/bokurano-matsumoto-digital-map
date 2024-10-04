//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Information = {
    id: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch: {
        url: string;
    };
    category: {
        name: string;
        slug: string;
    };
};
export type InformationResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Information[];
};

//APIの呼び出し
export const getInformation = async (queries?: MicroCMSQueries) => {
    return await client.get<InformationResponse>({ endpoint: "information", queries });
};
export const getInformationDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Information>({
        endpoint: "information",
        contentId,
        queries,
    });
};