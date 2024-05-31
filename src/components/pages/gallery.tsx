"use client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import OwnedObjects from "../element/owner-object";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useWallet } from "@suiet/wallet-kit";
import { useCallback, useEffect, useRef, useState } from "react";
import { getOwnedObjects } from "@/lib/apis";
import { VariableSizeGrid as Grid } from 'react-window';

import { PACKAGE_ID } from "@/config/network";
import { Cell } from "../element/owner-wrapper";

export default function Page() {
    const wallet = useWallet();

    // wrapper 数据获取
    const [ownedWrappers, setOwnedWrappers] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadMoreItems = useCallback(async () => {
        if (!wallet.connected || loading) return;
        setLoading(true);
        const { result, nextCursor, hasNextPage } = await getOwnedObjects({
            owner: wallet.account?.address as string,
            limit: 12,
            cursor,
            structType: `${PACKAGE_ID}::wrapper::Wrapper`,
            matchType: 'MatchAll',
            showDisplay: true,
        });
        // @ts-ignore
        setOwnedWrappers(prev => [...prev, ...result]);
        // @ts-ignore
        setCursor(nextCursor);
        setLoading(false);
    }, [wallet.connected, cursor, loading, wallet.account?.address]);

    useEffect(() => {
        if (wallet.connected && ownedWrappers.length === 0) {
            loadMoreItems();
        }
    }, [wallet.connected, loadMoreItems, ownedWrappers.length]);

    // wrapper 布局
    const containerRef = useRef(null);

    // @ts-ignore
    const columnCount = Math.floor((containerRef.current?.offsetWidth || 1200) / 245);
    const rowCount = Math.ceil(ownedWrappers.length / columnCount);

    // @ts-ignore
    const getColumnWidth = () => Math.floor((containerRef.current?.offsetWidth || 1200) / columnCount);
    const getRowHeight = () => 245; // Adjust based on desired row height


    console.log("columnCount:", columnCount, "rowCount:", rowCount)
    console.log("containerWidth:", containerRef.current)
    console.log("getColumnWidth:", getColumnWidth())
    console.log("getRowHeight:", getRowHeight())

    return (
        <div className="flex h-screen">
            <DndProvider backend={HTML5Backend}>
                <ScrollArea className="w-1/4 bg-white p-4 space-y-6">
                    <OwnedObjects />
                </ScrollArea>
                <div className="w-3/4 p-8 flex flex-col h-screen" ref={containerRef}>
                    <div className="flex items-center space-x-4 mb-4">
                        <Select>
                            <SelectTrigger aria-label="NFT Type" id="nft-type">
                                <SelectValue placeholder="NFT" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="type1">Type 1</SelectItem>
                                <SelectItem value="type2">Type 2</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input placeholder="input wrapper alias" />
                        <Button variant="secondary">Search</Button>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <Grid
                                columnCount={columnCount}
                                columnWidth={getColumnWidth}
                                height={600}
                                // @ts-ignore
                                width={containerRef.current?.offsetWidth || 1200}
                                rowCount={rowCount}
                                rowHeight={getRowHeight}
                                itemData={{ items: ownedWrappers, columnCount}}
                                onItemsRendered={({ visibleRowStopIndex }) => {
                                    if (visibleRowStopIndex >= rowCount - 1 && cursor) {
                                        loadMoreItems();
                                    }
                                }}
                            >
                                {Cell}
                            </Grid>
                        </div>
                    </div>
                </div>
            </DndProvider>
        </div>
    )
}