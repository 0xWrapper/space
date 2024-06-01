import { useDrop } from 'react-dnd';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { LogoIcon } from '../layout/logo';
import { useWallet } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { PACKAGE_ID } from '@/config/network';


export default function WrapperCreate({ title }: { title: string }) {
    const wallet = useWallet()

    async function handleDropNewWrapper(item: any) {
        console.log("Creating new wrapper with object:", item);
        const tx = new TransactionBlock();
        tx.moveCall({
            arguments: [],
            typeArguments: [],
            target: `${PACKAGE_ID}::wrapper::empty`,
        });
        try {
            console.log(tx)
            // execute the programmable transaction
            const resData = await wallet.signAndExecuteTransactionBlock({
                // @ts-ignore
                transactionBlock: tx,
            })
            console.log(resData)
            console.log('deploy successfully!', resData)
        } catch (e) {
            console.error('deploy failed', e)
        }
    }

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