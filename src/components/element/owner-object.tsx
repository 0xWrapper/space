
import { getOwnedObjects } from "@/lib/apis";
import { useWallet } from "@suiet/wallet-kit";
import { useEffect, useState, useCallback } from "react";
import GalleryObject from "../layout/gallery-object";
import { FixedSizeList as List } from 'react-window';
import { useDrag } from 'react-dnd';

const Row = ({ index, style, data }: { index: number, style: any, data: any[] }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'object',
        item: { id: data[index].data.objectId, type: 'object' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    const object = data[index].data;
    return (
        // @ts-ignore
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, ...style }}>
            <GalleryObject
                id={object.objectId}
                type={object.type}
                name={object.display.data?.name || object.type}
                image_url={object.display.data?.image_url}
            // fields={object.content.fields}
            />
        </div>
    );
};

export default function OwnedObjects() {
    const wallet = useWallet();
    const [ownedObjects, setOwnedObjects] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadMoreItems = useCallback(async () => {
        if (!wallet.connected || loading) return;
        setLoading(true);
        const { result, nextCursor, hasNextPage } = await getOwnedObjects({
            owner: wallet.account?.address as string,
            limit: 20,
            cursor,
            structType: "0x2::coin::Coin",
            matchType: 'MatchNone',
            showContent: true,
            showType: true,
            showDisplay: true,
        });
        // @ts-ignore
        setOwnedObjects(prev => [...prev, ...result]);
        // @ts-ignore
        setCursor(nextCursor);
        setLoading(false);
    }, [wallet.connected, cursor, loading, wallet.account?.address]);

    useEffect(() => {
        if (wallet.connected && ownedObjects.length === 0) {
            loadMoreItems();
        }
    }, [wallet.connected, loadMoreItems, ownedObjects.length]);

    return (
        <List
            height={600}
            itemCount={ownedObjects.length}
            itemSize={120}
            width={'100%'}
            itemData={ownedObjects}
            onItemsRendered={({ visibleStopIndex }: { visibleStopIndex: number }) => {
                if (visibleStopIndex >= ownedObjects.length - 1 && cursor) {
                    loadMoreItems();
                }
            }}
        >
            {Row}
        </List>
    );
}

