"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import { getObjectDetail, getPackageInitEvent } from "@/lib/apis";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { CopyIcon } from 'lucide-react';
import { minType, shortenAddress } from '@/lib/utils';
import CopyAddress from "../layout/copy-address";

export type InceptionWrapper = {
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

export function WrapperMusic({ inception }: { inception: InceptionWrapper }) {
    const videoRef = useRef(null);
    return (
        <div className="w-full bg-white overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4">
                <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                </svg>
                <div className="mx-3">
                    <p className="text-mid font-medium text-black-700">{inception.content.fields.alias}</p>
                    <p className="text-gray-500">Mint On {inception.content.fields.kind}</p>
                </div>
            </div>
            <div className="relative">
                <video
                    className="object-cover w-full h-64"
                    height="400"
                    src={inception.content.fields.content}
                    width="800"
                    controls
                    ref={videoRef}
                />
            </div>
        </div>
    );
}


export default function InceptionWrapperCard() {
    const [inception, setInception] = useState({
        content: {
            fields: {
                alias: "",
                content: "",
                items: [],
                kind: ""
            }
        },
        objectId: ""
    } as InceptionWrapper);
    const loadInception = useCallback(async () => {
        console.log("call loadInception");
        try {
            let id = await getPackageInitEvent()
            let inception = await getObjectDetail({
                id,
                showContent: true,
            });
            console.log("inception", inception);
            setInception(inception as any);
        } catch (error) {
            console.error("Failed to load inception:", error);
        }
    }, []);

    useEffect(() => {
        loadInception();
    }, [loadInception]);




    return (
        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <HoverCard>
                <HoverCardTrigger >
                    <WrapperMusic inception={inception} />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{inception.content.fields.alias}</h4>
                            <p className="text-sm">
                                {minType(inception.content.fields.kind)}
                            </p>
                            <CopyAddress address={inception.objectId} />
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};