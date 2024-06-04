"use client";
import { useCallback, useEffect, useState } from "react";
import { getObjectDetail, getPackageInitEvent } from "@/lib/apis";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { minType } from '@/lib/utils';
import CopyAddress from "../layout/copy-address";
import { Wrapper, WrapperVedeo } from "./wrapper";


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
    } as Wrapper);


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
                    <WrapperVedeo wrapper={inception} />
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