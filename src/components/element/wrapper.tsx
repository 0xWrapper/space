import { Music } from "lucide-react"
import { useRef } from "react"

export type Wrapper = {
    content: {
        fields: {
            alias: string,
            content: string
            items: [],
            kind: string
        }
    },
    objectId: string
}

export function WrapperVedeo({ wrapper }: { wrapper: Wrapper }) {
    const videoRef = useRef(null);
    return (
        <div className="w-full bg-white overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4">
                <Music />
                <div className="mx-3">
                    <p className="text-mid font-medium text-black-700">{wrapper.content.fields.alias}</p>
                    <p className="text-gray-500">{wrapper.content.fields.kind ? 'Mint On ' + wrapper.content.fields.kind : ''}</p>
                </div>
            </div>
            <div className="relative">
                <video
                    className="object-cover w-full h-64"
                    height="400"
                    src={wrapper.content.fields.content}
                    width="800"
                    controls
                    ref={videoRef}
                />
            </div>
        </div>
    );
}
