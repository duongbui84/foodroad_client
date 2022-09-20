import classNames from 'classnames/bind';
import MaxWidthSection from '~/layouts/GridSystem/MaxWidthSection';
import Row from '~/layouts/GridSystem/Row';

import styles from './SpecificExperiences.module.scss';

const cx = classNames.bind(styles);

function SpecificExperiences() {
  return (
    <div>
      <div className={cx('link-details')}></div>
      <h1 className={cx('heading')}>Pastel de Nata Workshop at a Traditional Bakery</h1>
      <p className={cx('slogan')}> Portugal • Lisbon</p>
      <MaxWidthSection gapDefault="1rem 1rem">
        <Row sl={1} el={4}>
          <div
            className={cx('image-wrapper')}
            style={{
              backgroundImage:
                'url(https://foodandroad.com/wp-content/uploads/2021/10/PRT-006-5.jpeg)',
            }}
          ></div>
        </Row>
        <Row sl={4} el={7}>
          <div
            className={cx('image-wrapper')}
            style={{
              backgroundImage:
                'url(https://foodandroad.com/wp-content/uploads/2021/10/PRT-004-5.jpeg)',
            }}
          ></div>
        </Row>
        <Row sl={7} el={10}>
          <MaxWidthSection gapDefault="1rem 1rem" marginDefault="0">
            <Row sl={1} el={14}>
              <div
                className={cx('image-half-wrapper')}
                style={{
                  backgroundImage:
                    'url(https://foodandroad.com/wp-content/uploads/2021/10/PRT-006-3.jpeg)',
                }}
              ></div>
            </Row>
            <Row sl={1} el={14}>
              <div
                className={cx('image-half-wrapper')}
                style={{
                  backgroundImage:
                    'url(https://foodandroad.com/wp-content/uploads/2021/10/PRT-006-1.jpeg)',
                }}
              ></div>
            </Row>
          </MaxWidthSection>
        </Row>
        <Row sl={10} el={13}>
          <div
            className={cx('image-wrapper')}
            style={{
              backgroundImage:
                'url(https://foodandroad.com/wp-content/uploads/2021/05/PRT-006-4.jpg)',
            }}
          ></div>
        </Row>
        <Row sl={1} el={9}>
          111111111111111111111
          <MaxWidthSection>
            <Row sl={1} el={4}>
              Activity
            </Row>
            <Row sl={4} el={7}>
              Duration
            </Row>
            <Row sl={7} el={10}>
              Style
            </Row>
            <Row sl={10} el={13}>
              Froup Size
            </Row>
          </MaxWidthSection>
          <MaxWidthSection>
            <div>
              <h2>About the Experience</h2>
              <p>
                Go behind the scenes and learn how to make the famous pastel de nata in a
                traditional Portuguese bakery with awards for its delicious pastries. Learn all the
                details while Chef João teaches you how to make your own custard tarts and tells
                stories and curiosities about Portuguese sweets.
              </p>
            </div>
            <div>
              <h2>Why you will love</h2>
              <ul>
                <li>Taste traditional pastries from the bakery during the welcome session</li>
                <li>Learn how to make Portuguese custard tarts at a real bakery</li>
                <li>Enjoy three freshly made tarts (or take them home) with a drink of choice</li>
                <li>All cooking levels are welcome</li>
              </ul>
            </div>
            <div>
              <h2>Description</h2>
              <p>
                Start the experience with a welcome tasting of small Portuguese pastries prepared
                in-house. You will learn the history of Pastel de Nata and interesting facts about
                the family that has run the bakery for generations. Next, you’ll go inside the
                kitchen for a hands-on cooking class to make irresistible Portuguese Custard Tarts
                (aka Pastel de Nata / Egg Tarts), which everybody loves! You will make the custard
                tarts from scratch and bake them in the class together with the group. Everyone will
                get to make at least three tarts by hand – spread the dough with a specific
                technique, fill in the custard, and bake it. In the end, you can enjoy your freshly
                baked Pastel de Nata (or take them home) with a drink of choice that includes
                ginjinha (sour cherry liqueur), coffee, tea, or juice. Adults and children are
                welcome! No previous cooking experience is required!
              </p>
            </div>
            <div>
              <h2>Includes</h2>
              <ul>
                <li>All equipment needed for the class</li>
                <li>Your own fresh tarts to eat at the end of the class, take it home, or both</li>
                <li>Pastries tasting from the bakery</li>
                <li>Beverages mentioned</li>
                <li>Additional food and drinks, unless mentioned</li>
                <li>Transportation</li>
              </ul>
            </div>
            <div>
              <h2>Location</h2>
              <p>
                Meeting Point: Pastelaria Batalha , Av. José Franco Canas 1, 2655-239 Malveira,
                Portugal
              </p>
            </div>
            <div>
              <h2>Details</h2>
              <div>
                <div>
                  <div>spanlogo</div>
                  <div>
                    <h4>Languages</h4>
                    <p>English, Portuguese</p>
                  </div>
                </div>
                <div>
                  <div>spanlogo</div>
                  <div>
                    <h4>Diet</h4>
                    <p>Vegetarian</p>
                  </div>
                </div>
                <div>
                  <div>spanlogo</div>
                  <div>
                    <h4>Accessibility</h4>
                    <p>Not suitable for wheelchair users</p>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthSection>
        </Row>
        <Row sl={9} el={13}>
          12222222222222222222222
          <div>CHECK</div>
          <div>WHY BOOK WITH US</div>
        </Row>
      </MaxWidthSection>
    </div>
  );
}

export default SpecificExperiences;
