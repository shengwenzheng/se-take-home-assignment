import {useCar} from '@/stores/order';
import { useShallow } from 'zustand/react/shallow';

const Index = () => {
    // const {car,num,add,change} = useCar();
    // const num = useCar.use.num();
    // const car = useCar.use.car();
    // const add = useCar.use.add()
    // const change = useCar.use.change()
    const {num,car,add,change} = useCar(useShallow((state)=>({
        num: state.num,
        car: state.car,
        add: state.add,
        change: state.change
    })))
    console.log('car')
    // console.log(summary())
    return <div>
        <div>car: {num}</div>
        {car.color}
        <div onClick={()=>change('yellow')}>change</div>
        <div onClick={add}>add car</div>
    </div>
}

export default Index;