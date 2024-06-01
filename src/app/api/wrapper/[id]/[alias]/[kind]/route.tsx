
import { fetchImageAsBase64, minType, shortenAddress, shortenType } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    id: string
    alias: string
    kind: string
    image_url: string
}

export async function GET(req: NextRequest, context: { params: Params }) {
    const id = context.params.id
    const shorten_id = shortenAddress(id);
    const alias = context.params.alias
    const kind = context.params.kind
    const shorten_kind = shortenType(context.params.kind)
    const image_url = context.params.image_url
    const imageBase64 = await fetchImageAsBase64(image_url);

    const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width="1000" height="1000" viewBox="0 0 120 120">
        <defs>
            <style>
                .st0 { fill: #236D37; }
                .st1 { fill: #C9CF79; }
                .st2 { fill: #7C9431; }
                .st3 { fill: #FFFFFF; }
                .text { font-size: 2px; fill: #FFFFFF; }
            </style>
            <symbol id="wrapper" viewBox="0 0 120 120">
                <path class="st0" d="M83.49,110.3l-49.69-0.57c-2.14-0.02-4.09-1.21-5.1-3.09L5.2,62.84c-0.98-1.83-0.92-4.04,0.15-5.81L31.68,13.6
 c1.08-1.77,3.01-2.85,5.08-2.82l49.69,0.57c2.14,0.02,4.09,1.21,5.1,3.09l23.49,43.8c0.98,1.83,0.92,4.04-0.15,5.81l-26.33,43.42
 C87.49,109.25,85.56,110.32,83.49,110.3z" />
                <path class="st1" d="M46.66,58.52c6.94,0.05,13.4-3.55,17-9.49L82.35,18.2c0.56-0.93-0.1-2.12-1.18-2.13l-37.22-0.46
 c-4.79-0.06-9.25,2.42-11.73,6.51L11.59,56.13c-0.56,0.93,0.1,2.12,1.19,2.13L46.66,58.52z" />
                <path class="st2" d="M28.64,94.19c2.99,6.11,8.98,10.01,15.77,10.26l34.86,0.62c1.06,0.04,1.82-1.12,1.36-2.08L64.46,71.21
 c-2.04-4.23-6.17-6.93-10.85-7.1l-39.58-1.04c-1.06-0.04-1.82,1.13-1.35,2.08L28.64,94.19z" />
                <path class="st3" d="M44.02,30.22c-10.62,6.14-16.61,17-16.17,28.16l7.35,0.06c-0.11-8.58,4.41-17.06,12.54-21.76
 c4.8-2.77,10.12-3.8,15.18-3.28c1.52,0.16,2.97-0.66,3.57-2.06l0.08-0.18c0.93-2.14-0.44-4.58-2.76-4.89
 C57.2,25.39,50.25,26.61,44.02,30.22z" />
                <path class="st1" d="M44.47,76.93c0.33,2-1.27,3.68-3.26,3.43l-7.92-0.99l-3.83-0.38c-1.84-0.18-2.68-2.48-1.35-3.68l6.2-5.62
 l4.92-5.03c0.91-0.93,2.54-0.41,2.85,0.91l1.73,7.37L44.47,76.93z" />
                <path class="st1" d="M28.5,63.45c0.64,2.93,1.75,5.84,3.35,8.63l3.17-3.02L37,67.13c-0.48-1.14-0.85-2.31-1.14-3.49L28.5,63.45z" />
                <path class="st1" d="M68.9,79.73c-4.05,1.7-8.33,2.27-12.45,1.82c-1.53-0.17-3,0.65-3.61,2.06l-0.1,0.23
 c-0.91,2.1,0.43,4.5,2.7,4.82c5.59,0.78,11.43,0.08,16.88-2.3L68.9,79.73z" />
                <path class="st2" d="M74.26,37.09c-0.35-1.99,1.24-3.69,3.24-3.45l8.04,0.65l4.24,0.38c1.84,0.17,2.7,2.46,1.38,3.67l-6.69,5.91
 l-5.42,5.65c-0.9,0.94-2.54,0.43-2.86-0.89l-1.25-7.94L74.26,37.09z" />
                <path class="st2" d="M84.73,43.84l-2.61,2.75c5.04,10.68,1.33,23.65-8.76,30.48l3.52,6.6c13.95-9.01,18.54-27.44,10.25-42.01
 L84.73,43.84z" />
            </symbol>
            <pattern id="bg" patternUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
                <image href="${image_url ? "" : imageBase64}" width="120" height="120" />
            </pattern>
            <mask id="text">
                <text fill="#FFFFFF" font-size="12" text-anchor="middle">
                    <tspan x="50%" y="10%" font-size="7">${shorten_kind}</tspan>
                    <tspan x="50%" y="15%" font-size="18">${shorten_id}</tspan>
                    <tspan x="51%" y="20%" font-size="18">${alias}</tspan>
                    <tspan x="50%" y="95%" font-size="4">${kind}</tspan>
                    <tspan x="50%" y="98%" font-size="3">${id}</tspan>
                </text>
            </mask>
        </defs>
        ${image_url ? `` : `<use href="#wrapper" />`}
        <rect width="120" height="120" fill="url(#bg)" />
        <rect width="120" height="120" fill="rgba(192,192,192,0.8)" />
        <rect width="120" height="120" fill="rgba(255,0,0,1)" mask="url(#text)" />
    </svg>
    `;
    const res = new NextResponse(svg);
    res.headers.set('Content-Type', 'image/svg+xml')
    return res;
}
