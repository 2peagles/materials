import {Route, Routes} from 'react-router-dom';
import { NavData } from '../../data/NavData';

export default function Navigation( ){
    return(
        <Routes>
              {NavData.map((item, index) => {
                 return(
                    <Route key={index} item={item.path} />
                     )
                 })}
        </Routes>
    )
}