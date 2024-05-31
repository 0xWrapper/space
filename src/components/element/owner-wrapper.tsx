import GalleryWrapper from "../layout/gallery-wrapper";
import WrapperCreate from "./wrapper-create";
import { VariableSizeGrid as Grid } from 'react-window';
import React, { useRef, useState, useEffect, useCallback } from 'react';



type WrapperCellProps = {
    items: any[],
    columnCount: number,
};

export const WrapperCell = ({ columnIndex, rowIndex, style, data }: { columnIndex: number, rowIndex: number, style: any, data: WrapperCellProps }) => {
    const index = rowIndex * data.columnCount + columnIndex;
    if (index === 0) {
        return (
            <div style={style} className="p-2">
                {/* 将物品放入新Wrapper */}
                <WrapperCreate
                    title="Create Wrapper"
                />
            </div>
        );
    } else {
        if (!data.items[index - 1]) {
            return null;
        }
        const wrapper = data.items[index - 1].data;
        return (
            <div style={style} className="p-2" >
                {/* 将物品放入已存在的Wrapper */}
                <GalleryWrapper
                    wrapperProps={
                        {
                            id: wrapper.objectId,
                            alias: wrapper.display.data?.alias,
                            kind: wrapper.display.data?.kind,
                            image_url: wrapper.display.data?.image_url,
                        }
                    }
                />
            </div>
        );
    }
};


export const WrapperList = ({ items }: { items: any[] }) => {
    // add a dummy item
    items = items.concat(items[items.length - 1]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item: any, index: number) => (
                <WrapperCell
                    key={index}
                    columnIndex={0}
                    rowIndex={index}
                    style={{}}
                    data={{ items, columnCount: 1 }}
                />
            ))
            }
        </div>
    );
};


// have bug
// TODO
// Can not load wrapper automatically 
// Unable to adapt the page
export const WrapperGrid = ({
    ownedWrappers,
    loadMoreItems,
    cursor
}: {
    ownedWrappers: any,
    loadMoreItems: any,
    cursor: any
}) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ columnCount: 1, columnWidth: 245, rowCount: 1 });

    const updateDimensions = useCallback(() => {
        // @ts-ignore
        const containerWidth = containerRef.current?.offsetWidth || 1200;
        // @ts-ignore
        const columnCount: number = Array.from(containerRef.current?.classList || []).reduce((count, className) => {
            if ((className as string).startsWith('md:grid-cols-')) {
                return parseInt((className as string).replace('md:grid-cols-', ''), 10);
            }
            return count;
        }, 3); // Default column count for md breakpoint
        const columnWidth = Math.floor(containerWidth / (columnCount as number));
        const rowCount = Math.ceil(ownedWrappers.length / (columnCount as number));

        setDimensions({ columnCount, columnWidth, rowCount });
    }, [ownedWrappers.length]);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions]);

    const getColumnWidth = () => dimensions.columnWidth;
    const getRowHeight = () => 245; // Adjust based on desired row height

    return (
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ width: '100%', height: '600px' }}>
            <Grid
                columnCount={dimensions.columnCount}
                columnWidth={getColumnWidth}
                height={600}
                // @ts-ignore
                width={containerRef.current?.offsetWidth || 1200}
                rowCount={dimensions.rowCount}
                rowHeight={getRowHeight}
                itemData={{ items: ownedWrappers, columnCount: dimensions.columnCount }}
                onItemsRendered={({ visibleRowStopIndex }: { visibleRowStopIndex: number }) => {
                    if (visibleRowStopIndex >= dimensions.rowCount - 1 && cursor) {
                        loadMoreItems();
                    }
                }}
            >
                {WrapperCell}
            </Grid>
        </div>
    );
};

