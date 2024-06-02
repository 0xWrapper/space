import { NETWORK, PACKAGE_ID } from '@/config/network'
import { getFullnodeUrl, SuiClient, SuiEvent, SuiObjectDataFilter } from '@mysten/sui.js/client'
import next from 'next'

export const client = new SuiClient({ url: getFullnodeUrl(NETWORK) })



export type FilterMatchType = 'MatchAll' | 'MatchAny' | 'MatchNone';

export interface GetOwnedObjectsParams {
    owner: string;
    cursor?: string | null | undefined;
    limit?: number | null | undefined;
    module?: string;
    packageId?: string;
    structType?: string;
    matchType?: FilterMatchType;
    showContent?: boolean;
    showDisplay?: boolean;
    showOwner?: boolean;
    showPreviousTransaction?: boolean;
    showStorageRebate?: boolean;
    showType?: boolean;
}


export const getAllOwnedObjects = async ({
    owner,
    module,
    packageId,
    structType,
    matchType = 'MatchAll',
    showType = false,
    showContent = false,
    showDisplay = false,
    showOwner = false,
    showPreviousTransaction = false,
    showStorageRebate = false
}: GetOwnedObjectsParams) => {
    let results: any[] = [];
    let cursor: string | null = null;

    while (true) {
        const { result, nextCursor, hasNextPage } = await getOwnedObjects({
            owner,
            cursor,
            module,
            packageId,
            structType,
            matchType,
            showType,
            showContent,
            showDisplay,
            showOwner,
            showPreviousTransaction,
            showStorageRebate
        });
        results = results.concat(result);

        cursor = nextCursor ?? null;

        if (!hasNextPage) {
            break;
        }
    }
    return results;
};

export const getOwnedObjects = async ({
    owner,
    cursor,
    limit,
    module,
    packageId,
    structType,
    matchType = 'MatchAll',
    showType = false,
    showContent = false,
    showDisplay = false,
    showOwner = false,
    showPreviousTransaction = false,
    showStorageRebate = false
}: GetOwnedObjectsParams) => {
    let result: any[] = [];
    let nextCursor = cursor;

    // 构建过滤器
    let filter: SuiObjectDataFilter | null = null;
    const constructedFilters: SuiObjectDataFilter[] = [];

    if (module && packageId) {
        constructedFilters.push({ MoveModule: { module, package: packageId } });
    }
    if (packageId) {
        constructedFilters.push({ Package: packageId });
    }
    if (structType) {
        constructedFilters.push({ StructType: structType });
    }

    if (constructedFilters.length > 0) {
        if (matchType === 'MatchAll') {
            filter = { MatchAll: constructedFilters };
        } else if (matchType === 'MatchAny') {
            filter = { MatchAny: constructedFilters };
        } else if (matchType === 'MatchNone') {
            filter = { MatchNone: constructedFilters };
        }
    }

    const data = await client.getOwnedObjects({
        owner,
        cursor: nextCursor,
        limit: limit,
        filter: filter || null,
        options: {
            showContent,
            showDisplay,
            showOwner,
            showPreviousTransaction,
            showStorageRebate,
            showType,
        },
    });

    nextCursor = data.nextCursor ?? null;
    result = data.data;
    const hasNextPage = data.hasNextPage;
    return { result, nextCursor, hasNextPage };
};


// export const getSuiDynamicFields = async (
//     id: string,
//     dynamic_field_name: string,
// ) => {
//     const parent_obj = await client.getObject({
//         id,
//         options: {
//             showContent: true,
//         },
//     })
//     const dynamic_field_key =
//         // @ts-ignore
//         parent_obj.data?.content?.fields[dynamic_field_name].fields.id.id ?? ''
//     if (!dynamic_field_key) {
//         throw new Error(`${dynamic_field_name} not found`)
//     }

//     const collection_keys = await client.getDynamicFields({
//         parentId: dynamic_field_key,
//     })
//     const result = []
//     for (const key of collection_keys.data) {
//         const obj = await getSuiObject(key.objectId)
//         // @ts-ignore
//         const real_obj = await getSuiObject(obj.data?.content?.fields.value)
//         // @ts-ignore
//         result.push(real_obj.data?.content?.fields)
//     }
//     return result
// }

// export const getSuiObject = (id: string) => {
//     return client.getObject({
//         id,
//         options: {
//             showContent: true,
//         },
//     })
// }

// export const getSpecificCoin = async (owner: string, coinType: string) => {
//     let result
//     if (coinType) {
//         result = await client.getCoins({
//             owner,
//             coinType,
//         })
//     } else {
//         result = await client.getCoins({
//             owner,
//         })
//     }
//     return result.data
// }

// export const getAllCoins = async (owner: string) => {
//     let result = await client.getAllCoins({
//         owner,
//     })
//     let coins: Record<string, number> = {}
//     for (const coin of Array.from(result.data)) {
//         if (!coins[coin['coinType']]) {
//             coins[coin['coinType']] = parseInt(coin['balance'])
//         } else {
//             coins[coin['coinType']] += parseInt(coin['balance'])
//         }
//     }
//     return coins
// }



export interface GetObjectParams {
    id: string;
    /**
     * Whether to show the content(i.e., package content or Move struct content) of the object. Default to
     * be False
     */
    showContent?: boolean;
    /** Whether to show the Display metadata of the object for frontend rendering. Default to be False */
    showDisplay?: boolean;
    /** Whether to show the owner of the object. Default to be False */
    showOwner?: boolean;
    /** Whether to show the previous transaction digest of the object. Default to be False */
    showPreviousTransaction?: boolean;
    /** Whether to show the storage rebate of the object. Default to be False */
    showStorageRebate?: boolean;
    /** Whether to show the type of the object. Default to be False */
    showType?: boolean;
}

export const getObjectDetail = async ({
    id,
    showType = false,
    showContent = false,
    showDisplay = false,
    showOwner = false,
    showPreviousTransaction = false,
    showStorageRebate = false
}: GetObjectParams) => {
    try {
        let result = await client.getObject({
            id,
            options: {
                showContent,
                showDisplay,
                showOwner,
                showPreviousTransaction,
                showStorageRebate,
                showType,
            },
        });
        if (result && result.data) {
            return result.data;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Error fetching object detail:", error);
        throw error;
    }
};

export const getPackageInitEvent = async () => {
    try {
        let result = await client.queryEvents({
            query: {
                MoveEventType: `${PACKAGE_ID}::wrapper::Init`
            }
        });
        if (result && result.data) {
            return (result.data[0].parsedJson as any).inception;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Error fetching package init event:", error);
        throw error;
    }
}


export const getPackageWrapEvent = async () => {
    try {
        let result = await client.queryEvents({
            query: {
                MoveEventType: `${PACKAGE_ID}::wrapper::Wrap`
            }
        });
        if (result && result.data) {
            return (result.data[0].parsedJson as any).inception;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Error fetching package init event:", error);
        throw error;
    }
}