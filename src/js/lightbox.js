import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'

export default function lightBox(src) {
    const instance = basicLightbox.create(`
    <img src="${src}" width="800px" height="550px">
`)

instance.show()
}