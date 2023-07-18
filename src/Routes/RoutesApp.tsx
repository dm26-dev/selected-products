import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Favorites } from '../pages/Favorites/Favorites';

export const RoutesApp = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            {/* <Route path='*' element={<Home />} /> */}

        </Routes>
    )
}
