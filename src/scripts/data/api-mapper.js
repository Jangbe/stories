import Map from '../utils/map';

export async function storyMapper(story) {
    return {
        ...story,
        location: {
            lat: story.lat,
            lon: story.lon,
            placeName: await Map.getPlaceNameByCoordinate(story.lat, story.lon),
        },
    };
}