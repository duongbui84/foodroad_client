import classNames from 'classnames/bind';

import styles from './Destinations.module.scss';
import Row from '~/layouts/GridSystem/Row';
import DestinationsContent from './DestinationsContent/DestinationsContent';
import MaxWidthSection from '~/layouts/GridSystem/MaxWidthSection';

const cx = classNames.bind(styles);

function Destinations() {
  return (
    <div>
      <h1 className={cx('heading')}>Food Travel Destinations</h1>

      <MaxWidthSection gapDefault={'0.5rem 0.5rem'} gapMedium={'1rem 1rem'}>
        <Row sl={1} el={6} sm={2} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/conserva-portugal-1.jpg"
            text="Portugal"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={6} el={10} sm={2} em={5} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-spain-country-guide.jpeg)"
            text="Spain"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={10} el={14} sm={5} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-italy-country-guide.jpeg)"
            text="Italy"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row className={cx('background')} sl={1} el={4} sm={2} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-indonesia-country-guide.jpeg)"
            text="Indonesia"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={4} el={8} sm={2} em={5} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-brazil-country-guide.jpeg)"
            text="Brazil"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={8} el={14} sm={5} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-thailand-country-guide.jpeg)"
            text="Thailand"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={1} el={6} sm={2} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-france-country-guide.jpeg)"
            text="France"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={6} el={10} sm={2} em={5} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-india-country-guide.jpeg)"
            text="India"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={10} el={14} sm={5} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/11/img-argentina-cover-country-page.jpeg)"
            text="Argentina"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row className={cx('background')} sl={1} el={5} sm={2} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-laos-country-guide.jpeg)"
            text="Laos"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={5} el={9} sm={2} em={5} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-malaysia-country-guide.jpeg)"
            text="Malaysia"
            to="/"
          ></DestinationsContent>
        </Row>

        <Row sl={9} el={14} sm={5} em={8} ss={2} es={8}>
          <DestinationsContent
            bgImage="linear-gradient(rgba( 0, 0, 0, 0.19 ),rgba( 0, 0, 0, 0.19 )),   url(https://foodandroad.com/wp-content/uploads/2021/04/img-featured-vietnam-country-guide.jpeg)"
            text="Viet Nam"
            to="/"
          ></DestinationsContent>
        </Row>
      </MaxWidthSection>
    </div>
  );
}

export default Destinations;
