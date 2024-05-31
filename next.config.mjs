/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['wrapper.space','localhost'], // 添加你允许加载图片的域名
    },
};

export default nextConfig;