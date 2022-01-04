import { YMaps, Map } from 'react-yandex-maps';
import './mapCart.scss';

const MapCart = () => (
    <YMaps>
        <div>
            <Map className='mapCart' defaultState={{ center: [42.878645, 74.616205], zoom: 12 }} />
        </div>
    </YMaps>
);
export default MapCart