import GalleryWrapper from "../layout/gallery-wrapper";
import WrapperCreate from "./wrapper-create";

type WrapperCellProps = {
    items: any[],
    columnCount: number,
};
export const Cell = ({ columnIndex, rowIndex, style, data }: { columnIndex: number, rowIndex: number, style: any, data: WrapperCellProps }) => {
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
            <div style={style} className="p-2">
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
