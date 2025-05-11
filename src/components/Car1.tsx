import {useCar} from '@/stores/order';
import { useShallow } from 'zustand/react/shallow';

const Index = () => {
    // const {car1,car1Add} = useCar();
    // const car1Add = useCar.use.car1Add()
    // const car1 = useCar.use.car1()

    // const {car1,car1Add} = useCar((state)=>({
    //     car1: state.car1,
    //     car1Add: state.car1Add
    // }),
    // shallow
    // )
    const [car1,car1Add] = useCar(useShallow(state => [state.car1,state.car1Add]))
    console.log('car1')
    return <div className='bg-[#d1d1d2] p-[10px]'>
        <div>car: {car1}</div>
        <div onClick={car1Add}>add car1</div>
    </div>
}

export default Index;