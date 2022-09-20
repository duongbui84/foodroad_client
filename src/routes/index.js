import { Blog } from '~/pages/Blog';
import { Contact } from '~/pages/Contact';
import { Destinations } from '~/pages/Destinations';
import { Experiences } from '~/pages/Experiences';
import Home from '~/pages/Home/Home.js';
import SpecificExperiences from '~/pages/SpecificExperiences/SpecificExperiences';
import routesConfig from '~/config/routes';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.contact, component: Contact },
  { path: routesConfig.blog, component: Blog },
  { path: routesConfig.destinations, component: Destinations },
  { path: routesConfig.experiences, component: Experiences },
  { path: routesConfig.specificExperiences, component: SpecificExperiences },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
