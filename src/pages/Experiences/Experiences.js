import classNames from 'classnames/bind';

import styles from './Experiences.module.scss';
import Grid from '~/layouts/GridSystem/Grid';
import Row from '~/layouts/GridSystem/Row';
import { ExperiencesItem } from './ExperiencesItem';
import { Button } from '~/components/Button';
import { useState } from 'react';
import routesConfig from '~/config/routes';
const cx = classNames.bind(styles);

function Experiences() {
  const [btnState, changeBtnState] = useState({
    activeBtnComponent: 1,
    btnComponents: [1, 2, 3, 4, 5, 6, 7],
  });

  function handleClick(index) {
    changeBtnState({
      ...btnState,
      activeBtnComponent: btnState.btnComponents[index],
    });
  }

  function handleStyleActive(index) {
    if (btnState.activeBtnComponent === btnState.btnComponents[index]) {
      return 'active';
    }
  }

  return (
    <div>
      <h1 className={cx('heading')}>Book Food Experiences</h1>
      <Grid gapDefault={'4rem 4rem'}>
        <Row sl={2} el={6}>
          <ExperiencesItem
            to={routesConfig.specificExperiences}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/05/PRT-006-2.jpg)"
            expType="WINE TOUR"
            privacy="Private"
            description="Private Tour in the Douro Valley with 3 Wineries"
            address="Porto, Portugal"
            price="€ 185"
          ></ExperiencesItem>
        </Row>

        <Row sl={6} el={10} sm={5} em={9}>
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

        <Row sl={10} el={14}>
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

        <Row sl={2} el={6} sm={5} em={9}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/img-VNM-002-1.jpg)"
            expType="FOOD TOUR"
            privacy="Shared"
            description="Food by Night – Private Motorbike Tour"
            address="Ho Chi Minh City, Vietnam"
            price="€ 40"
          ></ExperiencesItem>
        </Row>

        <Row sl={6} el={10}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/TH-006-1.jpg)"
            expType="COOKING CLASS"
            privacy="Shared"
            description="Hands-on Genuine Thai Cooking Class and Market Tour"
            address="Bangkok, Thailand"
            price="€ 34"
          ></ExperiencesItem>
        </Row>

        <Row sl={10} el={14} sm={5} em={9}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/LA-006-1.jpg)"
            expType="AGRITOURISM"
            privacy="Shared"
            description="Plantation Workshop & Tribal Village Trek"
            address="Pakse, Laos"
            price="€ 185"
          ></ExperiencesItem>
        </Row>

        <Row sl={2} el={6}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/LA-004-1.jpg)"
            expType="COOKING CLASS"
            privacy="Shared"
            description="Home-cooked dinner & Baci ceremony in Ban Nasang"
            address="Luang Prabang, Laos"
            price="€ 45"
          ></ExperiencesItem>
        </Row>

        <Row sl={6} el={10} sm={5} em={9}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/LA-003-4.jpg)"
            expType="COOKING CLASS"
            privacy="Shared"
            description="Traditional Market Tour and Private Laotian Cooking Class"
            address="Luang Prabang, Laos"
            price="€ 50"
          ></ExperiencesItem>
        </Row>

        <Row sl={10} el={14}>
          <ExperiencesItem
            to={routesConfig.home}
            bgImage="url(https://foodandroad.com/wp-content/uploads/2021/04/LA-002-2.jpg)"
            expType="AGRITOURISM"
            privacy="Shared"
            description="Day-time Bamboo weaving & Cooking Classes"
            address="Luang Prabang, Laos"
            price="€ 35"
          ></ExperiencesItem>
        </Row>
      </Grid>
      <div className={cx('list-btn')}>
        {btnState.btnComponents.map((btnComp, index) => {
          return (
            <Button
              key={index}
              pageBtn
              styleBtn={handleStyleActive(index)}
              onClick={() => {
                handleClick(index);
              }}
            >
              {btnComp}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
