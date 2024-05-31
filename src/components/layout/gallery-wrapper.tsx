"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { CopyIcon, ImageIcon, SplitIcon, SquarePenIcon } from 'lucide-react';
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

export default function GalleryWrapper({
    wrapperProps,
}: {
    wrapperProps: GalleryWrapperProps,
}) {
    const [imageBase64, setImageBase64] = useState('');
    const validId = shortenAddress(wrapperProps.id);
    const validAlias = wrapperProps.alias || "Wrapper";
    const validKind = minType(wrapperProps.kind);

    const handleIdCopy = () => {
        navigator.clipboard.writeText(wrapperProps.id).then(() => {
            console.log('Wrapper Id copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
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
                <CardTitle>{wrapperProps.alias ? wrapperProps.alias : validId}</CardTitle>
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
                                <div className="flex items-center pt-2">
                                    <span className="text-xs text-muted-foreground">
                                        {validId}
                                    </span>
                                    {" "}
                                    <CopyIcon className="mr-2 h-4 w-4 opacity-70" onClick={handleIdCopy} />
                                </div>
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
                            <Input placeholder="Enter alias" />
                        </div>
                        <SheetFooter>
                            <Button>Save</Button>
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
                    <ImageIcon className="h-4 w-4" />
                    <input accept="image/*" className="hidden" type="file" />
                </Button>
            </CardFooter>
        </Card>
    );
};
