"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { CopyIcon, PackageOpen, SplitIcon, SquarePenIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { fetchImageAsBase64, minType, shortenAddress } from '@/lib/utils';
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useDrag, useDrop } from 'react-dnd';
import { LogoIcon } from './logo';
import Image from 'next/image';
import { useWallet } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { PACKAGE_ID } from '@/config/network';
import CopyAddress from './copy-address';


type GalleryWrapperProps = {
    id: string,
    alias: string,
    kind: string,
    image_url: string,
}
const handleDropToWrapper = (item: any) => {
    console.log("Dropped item:", item)
    if (item.type === 'object') {
        console.log("Adding object to existing wrapper:", item);
    } else if (item.type === 'wrapper') {
        console.log("Adding wrapper to existing wrapper:", item);
    }
};

export default function GalleryWrapper({ wrapperProps }: { wrapperProps: GalleryWrapperProps }) {
    const wallet = useWallet()

    const [imageBase64, setImageBase64] = useState('');
    const validAlias = wrapperProps.alias || "Wrapper";
    const validKind = minType(wrapperProps.kind);


    const [aliasInput, setAliasInput] = useState('');

    async function handleUnWrap() {
        console.log("Unwrap wrapper:", wrapperProps.id);
        const tx = new TransactionBlock();
        tx.moveCall({
            arguments: [
                tx.object(wrapperProps.id)
            ],
            // typeArguments: [wrapperProps.kind],
            target: `${PACKAGE_ID}::wrapper::destroy_empty`,
        });
        try {
            // execute the programmable transaction
            const resData = await wallet.signAndExecuteTransactionBlock({
                // @ts-ignore
                transactionBlock: tx,
            })
            console.log('unwrap successfully!', resData)
        } catch (e) {
            console.error('unwrap failed', e)
        }
    };

    async function handleAliasSave() {
        console.log("Set wrapper alias:", wrapperProps.id, wrapperProps.alias, aliasInput);
        const tx = new TransactionBlock();

        tx.moveCall({
            arguments: [
                tx.object(wrapperProps.id),
                tx.pure(aliasInput),
            ],
            // typeArguments: [wrapperProps.kind],
            target: `${PACKAGE_ID}::wrapper::set_alias`,
        });

        try {
            // execute the programmable transaction
            const resData = await wallet.signAndExecuteTransactionBlock({
                // @ts-ignore
                transactionBlock: tx,
            })
            console.log('set alias successfully!', resData)
        } catch (e) {
            console.error('set alias failed', e)
        }
    };

    useEffect(() => {
        const loadImage = async () => {
            const base64 = await fetchImageAsBase64(wrapperProps.image_url);
            setImageBase64(base64);
        };

        loadImage();
    }, [wrapperProps.image_url]);


    const [{ isOver }, drop] = useDrop(() => ({
        accept: ['object', 'wrapper'],
        drop: (item) => handleDropToWrapper(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'wrapper',
        item: { id: wrapperProps.id, type: 'wrapper' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        // @ts-ignore
        <Card ref={drop} className={`w-full bg-white ${isOver ? 'bg-gray-200' : ''}`}>
            <CardHeader>
                <CardTitle>{wrapperProps.alias ? wrapperProps.alias : shortenAddress(wrapperProps.id)}</CardTitle>
            </CardHeader>
            <CardContent>
                <HoverCard>
                    {/* @ts-ignore */}
                    <HoverCardTrigger ref={drag} className={{ opacity: isDragging ? 0.5 : 1 }} asChild>
                        {imageBase64 ? (
                            <Image
                                className="object-contain"
                                style={{
                                    aspectRatio: "200/200",
                                    objectFit: "cover",
                                }}
                                height={200}
                                width={200}
                                src={imageBase64}
                                alt={wrapperProps.id}
                            />
                        ) : (
                            <LogoIcon height={200} width={200} />
                        )}

                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">{validAlias}</h4>
                                <p className="text-sm">
                                    {validKind}
                                </p>
                                <CopyAddress address={wrapperProps.id} />
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </CardContent>

            <CardFooter className="flex justify-between">
                <Sheet>
                    <SheetTrigger asChild>

                        <Button variant="secondary">
                            <SquarePenIcon className="h-4 w-4" />
                        </Button>

                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Set Alias</SheetTitle>
                        </SheetHeader>
                        <div>
                            <Input
                                placeholder="Enter alias"
                                value={aliasInput}
                                onChange={(e: any) => setAliasInput(e.target.value)}
                            />
                        </div>
                        <SheetFooter>
                            <Button onClick={handleAliasSave}>Save</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="secondary">
                            <SplitIcon className="h-4 w-4" />
                        </Button>

                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Split NFT</SheetTitle>
                        </SheetHeader>
                        <div>
                            <Input placeholder="Enter split amount" />
                        </div>
                        <SheetFooter>
                            <Button>Split</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <Button variant="secondary">
                    <PackageOpen className="h-4 w-4" onClick={handleUnWrap} />
                </Button>

                {/* <Button variant="secondary">
                    <ImageIcon className="h-4 w-4" />
                    <input accept="image/*" className="hidden" type="file" />
                </Button> */}
            </CardFooter>
        </Card>
    );
};
