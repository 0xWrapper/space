import { useDrop } from 'react-dnd';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { LogoIcon } from '../layout/logo';

// dnd
const handleDropNewWrapper = (item: any) => {
    console.log("Creating new wrapper with:", item);
    // 添加创建新的wrapper的逻辑
};

export default function WrapperCreate({
    title,
}: {
    title: string,
}) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'object',
        drop: (item) => handleDropNewWrapper(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        // @ts-ignore
        <Card ref={drop} className={`w-full bg-white ${isOver ? 'bg-gray-200' : ''}`}>
            <CardHeader className="tracking-wide">
                <CardTitle >{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <LogoIcon height={200} width={200} />
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="secondary">Create</Button>
            </CardFooter>
        </Card>
    );
};