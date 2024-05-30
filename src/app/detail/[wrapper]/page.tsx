import DetailPage from "@/components/pages/detail";
import Image from "next/image";

export default function Page({ params }: { params: { wrapper: string } }) {
  console.log(params.wrapper);
  return (
      <DetailPage/>
  );
}
