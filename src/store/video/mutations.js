export default {
    playVideo(state, { audio }) {
        state.url = audio.url
        state.cover = audio.cover
        state.playStatus = true
            // alert(2)
    },
    pauseVideo(state) {
        state.playStatus = false
            // alert(3)
    }
}