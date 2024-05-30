import { useDrop } from 'react-dnd';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function WrapperCard({ title, children, onDrop }: { title: string, children: React.ReactNode, onDrop: (item: any) => void }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'object',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <Card ref={drop} className={`w-full bg-white ${isOver ? 'bg-gray-200' : ''}`}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="secondary">Create</Button>
            </CardFooter>
        </Card>
    );
};