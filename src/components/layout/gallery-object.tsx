import React from 'react';


type GalleryObjectProps = {
    name: string,
    type: string,
    id: string,
    image_url: string,
    // fields: any
}


export default function GalleryObject({ name, type, id, image_url }: GalleryObjectProps) {
    const validName = name || 'Unknown';
    const validType = type || 'Unknown';
    const validId = id || 'Unknown';
    const validImageUrl = image_url || 'Unknown';
    // const validFields = fields && Object.keys(fields).length > 0 ? fields : {};
    // const encodedFields = encodeURIComponent(JSON.stringify(validFields));

    const svgUrl = `/api/object/${encodeURIComponent(validId)}/${encodeURIComponent(validType)}/${encodeURIComponent(validName)}/${encodeURIComponent(validImageUrl)}`;

    return (
        <div className="flex flex-col items-center">
            <img
                alt="Wrapper Protocol"
                className="mb-2"
                height="100"
                src={svgUrl}
                style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                }}
                width="100"
            />
        </div>
    );
}

