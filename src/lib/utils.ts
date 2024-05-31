import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

export async function fetchImageAsBase64(image_url: string) {
  const cachedImage = cache.get(image_url);
  if (cachedImage) {
    return cachedImage as string;
  }

  let imageBase64 = "";
  const isExternalLink = image_url.startsWith('http://') || image_url.startsWith('https://');
  if (image_url !== "Unknown" && isExternalLink) {
    try {
      const response = await fetch(image_url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const buffer = await response.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');
      const mimeType = response.headers.get('Content-Type');
      imageBase64 = `data:${mimeType};base64,${base64Image}`;

      cache.set(image_url, imageBase64); // 将结果存入缓存
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  } else {
    imageBase64 = image_url;
  }

  return imageBase64;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function shortenAddress(address: string) {
  if (address.length > 10) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  return address;
}

export function shortenType(type: string) {
  return type
    .replace(/0x[a-fA-F0-9]{2,64}/g, match => {
      return shortenAddress(match);
    }).replace(/</g, '(')
    .replace(/>/g, ')');
}


export function minType(type: string) {
  let shortened = type.replace(/0x[a-fA-F0-9]{2,64}::/g, '');
  shortened = shortened.replace(/</g, '(').replace(/>/g, ')');
  return shortened;
}
