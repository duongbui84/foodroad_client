import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import { Button } from '~/components/Button';
import Grid from '~/layouts/GridSystem/Grid';
import Row from '~/layouts/GridSystem/Row';
import MaxWidthSection from '~/layouts/GridSystem/MaxWidthSection';
import { ExperiencesItem } from '../Experiences/ExperiencesItem';
import DestinationsContent from '../Destinations/DestinationsContent/DestinationsContent';
import routesConfig from '~/config/routes';
import Slider from '~/layouts/component/Slider/Slider';

const cx = classNames.bind(styles);
function Home() {
  return (
    <div>
      <Slider />
      <h1 className={cx('heading')}>Discover the world through food culture</h1>
      <div className={cx('separation-line')}></div>
      <p className={cx('slogan')}>
        Here you will find everything to explore the flavors of the world!
      </p>
      <MaxWidthSection gapDefault={'4rem'} gapMedium={'1rem'} marginMedium={'0 -2rem'}>
        <Row sl={1} el={5} sm={2} em={4} ss={2} es={8}>
          <img
            className={cx('content-img')}
            alt="Anh dau bep"
            src="https://foodandroad.com/wp-content/uploads/2021/09/img-food-travel-roteiros-gastronomicos.jpeg"
          />
          <Link className={cx('link-item')} to={'/'}>
            <h3>Culinary Trips</h3>
            <p className={cx('item-text')}>
              Private and customizable itineraries and small group expeditions.
            </p>
            <p className={cx('item-label')}>Explore trips →</p>
          </Link>
        </Row>
        <Row sl={5} el={9} sm={4} em={6} ss={2} es={8}>
          <img
            className={cx('content-img')}
            alt="Anh nguyen lieu"
            src="https://foodandroad.com/wp-content/uploads/2021/09/img-spices-basket.jpeg"
          />
          <Link className={cx('link-item')} to={routesConfig.experiences}>
            <h3>Book Experiences</h3>
            <p className={cx('item-text')}>A special selection to spice up your itinerary.</p>
            <p className={cx('item-label')}>Explore experiences →</p>
          </Link>
        </Row>
        <Row sl={9} el={13} sm={6} em={8} ss={2} es={8}>
          <img
            className={cx('content-img')}
            alt="Anh song ho"
            src="https://foodandroad.com/wp-content/uploads/2021/09/img-tailor-made-food-travel.jpeg"
          />
          <Link className={cx('link-item')} to={'/'}>
            <h3>Tailor-Made</h3>
            <p className={cx('item-text')}>Boutique service for fully custom travel planning.</p>
            <p className={cx('item-label')}>Learn more →</p>
          </Link>
        </Row>
      </MaxWidthSection>

      <div className={cx('wrapper-sub-heading')}>
        <div className={cx('sub-heading')}>
          We believe food is the best way to connect people, places, and memories​.
        </div>
        <p className={cx('slogan')}>– ADRIANO & KARINA – CO-FOUNDERS –</p>
      </div>
      <div>
        <h1 className={cx('heading')}>Food Travel Destinations</h1>
        <div className={cx('separation-line')}></div>
        <p className={cx('slogan')}>
          Travel to a world of new references and uncover the best food destinations around the
          world!
        </p>
      </div>
      <MaxWidthSection>
        <Row sl={1} el={6} sm={2} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/conserva-portugal-1.jpg"
            text="Portugal"
            to={routesConfig.home}
          ></DestinationsContent>
        </Row>

        <Row sl={6} el={10} sm={2} em={5} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-spain-country-guide.jpeg)"
            text="Spain"
            to={routesConfig.home}
          ></DestinationsContent>
        </Row>

        <Row sl={10} el={14} sm={5} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-italy-country-guide.jpeg)"
            text="Italy"
            to={routesConfig.home}
          ></DestinationsContent>
        </Row>

        <Row className={cx('background')} sl={1} el={4} sm={2} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-indonesia-country-guide.jpeg)"
            text="Indonesia"
            to={routesConfig.home}
          ></DestinationsContent>
        </Row>

        <Row sl={4} el={8} sm={2} em={5} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-brazil-country-guide.jpeg)"
            text="Brazil"
            to={routesConfig.home}
          ></DestinationsContent>
        </Row>

        <Row sl={8} el={14} sm={5} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-thailand-country-guide.jpeg)"
            text="Thailand"
            to={routesConfig.home}
          ></DestinationsContent>
        </Row>
      </MaxWidthSection>
      <Button maxContent primaryHover to={routesConfig.destinations}>
        VIEW ALL DESTINATIONS →
      </Button>

      <h1 className={cx('heading')}>Experiences a-la-carte</h1>
      <div className={cx('separation-line')}></div>
      <p className={cx('slogan')}>
        Planning the trip on your own? See our selection of experiences to add extra flavors to your
        itinerary.
      </p>

      <Grid marginDefault="4rem 0" gapMedium="1rem 1rem" marginMedium="2rem -2rem 2rem">
        <Row sl={2} el={5} sm={2} em={4} ss={2} es={5}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/05/PRT-006-2.jpg)"
            expType="WINE TOUR"
            privacy="Private"
            description="Private Tour in the Douro Valley with 3 Wineries"
            address="Porto, Portugal"
            price="€ 185"
          ></ExperiencesItem>
        </Row>

        <Row sl={5} el={8} sm={4} em={6} ss={5} es={8}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/12/HUN-E006-05.jpg)"
            expType="WINE TOUR"
            privacy="Private"
            description="Hungarian Wine Tour to Eger with lunch"
            address="Budapest, Hungary"
            price="US$ 390"
          ></ExperiencesItem>
        </Row>

        <Row sl={8} el={11} sm={6} em={8} ss={2} es={5}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/12/HUN-E005-04.jpg)"
            expType="WINE TOUR"
            privacy="Private"
            description="Hungarian Wine Tour to Villány with lunch"
            address="Budapest, Hungary"
            price="US$ 390"
          ></ExperiencesItem>
        </Row>

        <Row sl={11} el={14} ss={5} es={8} className="none-in-medium">
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/image-IT-006-3.jpg)"
            expType="WINE TOUR"
            privacy="Shared"
            description="Mount Etna Food and Wine Tasting Tour"
            address="Catania, Italy"
            price="€ 119"
          ></ExperiencesItem>
        </Row>
      </Grid>
      <Button maxContent primaryHover to={routesConfig.experiences}>
        VIEW ALL EXPERIENCES →
      </Button>

      <div className={cx('tailor-made-section')}>
        <div>
          <img
            className={cx('tailor-made-img')}
            alt="anh ban an"
            src="https://foodandroad.com/wp-content/uploads/2021/04/img-food-travel-unique-moments-1.jpeg"
          />
        </div>
        <div className={cx('tailor-made-content')}>
          <h2>Looking for a tailor-made food trip?</h2>
          <p>
            We got it! Food Travel Design is a premium service that will make your trip a true
            culinary journey!
          </p>
          <Button to="#" primary>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
