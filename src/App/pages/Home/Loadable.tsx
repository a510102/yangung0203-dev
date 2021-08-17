import { lazyLoad } from '../../../helpers/loadable';

export default lazyLoad(() => import('.')); 