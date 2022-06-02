import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: 'My Love', duration: '4.23' },
        { title: 'Macarene', duration: '2.45' },
        { title: 'Today', duration: '3.45' },
        { title: 'My Last Day', duration: '2.25' },
        
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})