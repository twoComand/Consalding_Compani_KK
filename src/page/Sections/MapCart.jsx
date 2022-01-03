import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = { center: [55, 37], zoom: 10 };

const MapCart = () => (
    <YMaps>
        <Map state={mapState}>

            <Placemark
                geometry={{
                    coordinates: [55.751574, 37.573856]
                }}
                properties={{
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }}
                options={{
                    iconLayout: "default#image",
                    iconImageHref: 'images/myIcon.gif',
                    iconImageSize: [30, 42],
                    iconImageOffset: [-3, -42]
                }}
            />

        </Map>
    </YMaps>
);

export default MapCart
