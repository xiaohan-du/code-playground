import ICard from '../interfaces/ICard';

export const cardDetails: ICard[] = [
  {
    id: 1,
    isPanel: true,
    imgPath: require('../static/images/tool.jpg'),
    title: 'Features',
    content: '',
    icon1: 'Home',
    icon2: 'Work',
    icon3: 'All',
    price: 0
  },
  {
    id: 2,
    isPanel: false,
    imgPath: require('../static/images/tool2.jpg'),
    title: 'Cover at home',
    content: 'We will cover your tools when they are stored in your home overnight',
    icon1: require('../static/icons/yes.png'),
    icon2: require('../static/icons/no.png'),
    icon3: require('../static/icons/no.png'),
    price: 100
  },
  {
    id: 3,
    isPanel: false,
    imgPath: require('../static/images/laptop1.jpg'),
    title: 'Computer cover',
    content: 'We will cover one business laptop or tablet you use for work',
    icon1: require('../static/icons/yes.png'),
    icon2: require('../static/icons/yes.png'),
    icon3: require('../static/icons/no.png'),
    price: 200
  },
  {
    id: 4,
    isPanel: false,
    imgPath: require('../static/images/repair2.jpg'),
    title: 'Repair cover',
    content: 'We will pay for the full original purchase price when your tools or laptops are not repairable',
    icon1: require('../static/icons/yes.png'),
    icon2: require('../static/icons/yes.png'),
    icon3: require('../static/icons/yes.png'),
    price: 50
  }
];