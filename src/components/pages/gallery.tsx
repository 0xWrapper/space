"use client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import OwnedObjects from "../element/owner-object";
import WrapperCard from "../element/wrapper-card";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Page() {

    const handleDropNewWrapper = (item: any) => {
        console.log("Creating new wrapper with:", item);
        // 添加创建新的wrapper的逻辑
    };

    const handleDropToWrapper = (item: any) => {
        console.log("Adding to existing wrapper:", item);
        // 添加将对象添加到现有wrapper的逻辑
    };

    return (
        <div className="flex h-screen">
            <DndProvider backend={HTML5Backend}>
                <ScrollArea className="w-1/4 bg-white p-4 space-y-6">
                    <OwnedObjects />
                </ScrollArea>
                <div className="w-3/4 p-8 flex flex-col h-screen">
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

                            <WrapperCard title="New Wrapper" onDrop={handleDropNewWrapper}>
                                <p className="text-center">Create a new wrapper</p>
                            </WrapperCard>
                            <WrapperCard title="Nft Wrapper" onDrop={handleDropToWrapper}>
                                <p>items:aa nft , bb nft</p>
                            </WrapperCard>
                            <WrapperCard title="Nft Wrapper" onDrop={handleDropToWrapper}>
                                <p>items:aa nft , bb nft</p>
                            </WrapperCard>
                        </div>
                    </div>
                </div>
            </DndProvider>
        </div>
    )
}