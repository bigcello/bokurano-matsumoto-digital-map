//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env["MICROCMS_SERVICE_DOMAIN"],
    apiKey: import.meta.env["MICROCMS_API_KEY"],
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
        id: string;
        name: string;
    };
};

export type InformationResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Information[];
};

//APIの呼び出し
const endpointInformation = "information";

//CMSからAPIで記事データを取得する（一覧）
export const getInformation = async (queries?: MicroCMSQueries) => {
    return await client.get<InformationResponse>({
        endpoint: endpointInformation,
        queries,
    });
};

//CMSからAPIで記事データを取得する（詳細）
export const getInformationDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Information>({
        endpoint: endpointInformation,
        contentId,
        queries,
    });
};