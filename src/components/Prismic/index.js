import PrismicBanner from './PrismicBanner'
import PrismicBanners from './PrismicBanners'
import PrismicCarousel from './Carousel'
import PrismicProductHeader from './PrismicProductHeader'
import PrismicSmallHero from './PrismicSmallHero'
import PrismicPageFullPageCover from './PrismicPageFullPageCover'

let Components = []

Components['banner_with_caption'] = PrismicBanner
Components['banner_gallery'] = PrismicBanners
Components['image_gallery'] = PrismicCarousel
Components['header'] = PrismicProductHeader
Components['small_hero'] = PrismicSmallHero
Components['full_page_cover'] = PrismicPageFullPageCover

export default Components
