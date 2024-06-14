
import { Link } from 'react-router-dom'
import Happy from '@/assets/Happy-success.svg';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col text-center items-center justify-center">
                <p className="font-semibold text-primary">Successful!</p>
                <h1 className="sm:text-5xl text-2xl font-bold">You have successfully captured your lead.</h1>
                <img className='w-[290px]' src={Happy} alt='happy-success-img'/>
                <p className="text-muted-foreground mt-4">One of our agent will contact you back to confirm your details.</p>
                <Link className={'mt-5 flex text-primary'}
                    to={'/'}
                    >
                        <Button variant={'ghost'}>
                            Go back home
                            <MoveRight className="w-4 h- ml-2" />
                        </Button>
                </Link>
            </div>
        </div>
    )
}
  