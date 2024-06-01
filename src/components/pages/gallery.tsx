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
import { getAllOwnedObjects, getOwnedObjects } from "@/lib/apis";

import { PACKAGE_ID } from "@/config/network";
import { WrapperCell, WrapperGrid, WrapperList } from "../element/owner-wrapper";
import { Key } from "lucide-react";

export default function Page() {
    const wallet = useWallet();

    const [shouldRefresh, setShouldRefresh] = useState(false); // 控制刷新
    useEffect(() => {
        setInterval(() => {
            console.log("refresh");
            setShouldRefresh((prev: boolean) => !prev); // 切换布尔变量
        }, 1000);
    }, []);


    // wrapper 数据获取
    const [ownedWrappers, setOwnedWrappers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cursor, setCursor] = useState(null);

    // 使用useCallback可以进行动态渲染
    // 使用useEffect来一次请求完毕
    const loadMoreItems = useCallback(async () => {
        if (!wallet.connected || loading) return;
        console.log("load more items");
        setLoading(true);
        const { result, nextCursor, hasNextPage } = await getOwnedObjects({
            owner: wallet.account?.address as string,
            limit: 20,
            cursor,
            structType: `${PACKAGE_ID}::wrapper::Wrapper`,
            matchType: 'MatchAll',
            showDisplay: true,
        });
        if (result.length !== 0) {
            // @ts-ignore
            setOwnedWrappers(prev => [...prev, ...result]);
        }
        // @ts-ignore
        setCursor(nextCursor);
        setLoading(false);
    }, [wallet.connected, cursor, loading, wallet.account?.address]);

    const [kind, setKind] = useState("");
    const [alias, setAlias] = useState("");
    const [filteredWrappers, setFilteredWrappers] = useState([]);
    const [kindSet, setKindSet] = useState(new Set());

    useEffect(() => {
        console.log("to render wrapper and select kind");
        let kinds = new Set();
        ownedWrappers.forEach((wrapper: any) => {
            if (wrapper.data.display.data?.kind) kinds.add(wrapper.data.display.data?.kind);
        });
        setKindSet(kinds);
        setFilteredWrappers(ownedWrappers);
    }, [ownedWrappers]);

    useEffect(() => {
        if (wallet.connected && ownedWrappers.length === 0 && shouldRefresh) {
            console.log("connected or refresh to load more items");
            loadMoreItems();
        }
    }, [wallet.connected, loadMoreItems, ownedWrappers.length, shouldRefresh]);


    const filterWrappers = () => {
        let filtered = ownedWrappers;
        if (kind) {
            filtered = filtered.filter((wrapper: any) => wrapper.data.display.data?.kind === kind);
        }
        if (alias && alias !=" ") {
            filtered = filtered.filter((wrapper: any) => wrapper.data.display.data?.alais && wrapper.data.display.data?.alais.includes(alias));
        }
        console.log("filterWrappers");
        console.log(filtered);
        setFilteredWrappers(filtered);
    };

    const handleSearch = () => {
        console.log("search");
        console.log(kind, alias);
        filterWrappers();
    };

    return (
        <div className="flex h-screen">
            <DndProvider backend={HTML5Backend}>
                <ScrollArea className="w-1/4 bg-white p-4 space-y-6">
                    <OwnedObjects />
                </ScrollArea>
                <div className="w-3/4 p-8 flex flex-col h-screen">
                    <div className="flex items-center space-x-4 mb-4">
                        <Select onValueChange={(value: string) => setKind(value)}>
                            <SelectTrigger aria-label="Wrapper Type">
                                <SelectValue placeholder="Wrapper" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from(kindSet as Set<string>).map(kind => (
                                    <SelectItem key={kind} value={kind}>{kind}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Input
                            placeholder="input wrapper alias"
                            value={alias}
                            onChange={(e: any) => setAlias(e.target.value)}
                        />
                        <Button variant="secondary" onClick={handleSearch}>Search</Button>

                    </div>

                    <div className="flex-1 overflow-auto">
                        <WrapperList items={filteredWrappers} />
                    </div>
                </div>
            </DndProvider>
        </div>
    )
}