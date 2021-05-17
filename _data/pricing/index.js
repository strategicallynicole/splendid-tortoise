
import imgPricing1 from 'assets/images/app/pricing/01.png';
import imgPricing2 from 'assets/images/app/pricing/02.png';
import imgPricing3 from 'assets/images/app/pricing/03.png';

const data = {
    pricings: [
      {
        thumb: imgPricing1,
        name: 'Lorem ipsum',
        price: 'Bacon',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Bacon Ipsum',
        services:[
            {
                content: 'Feature',
                className: '--on'
            },
            {
                content: 'Feature',
                className: '--on'
            },
            {
                content: 'Feature',
                className: '--on'
            },
            {
                content: 'Feature',
                className: '--off'
            },
            {
                content: 'Feature',
                className: '--off'
            }
        ]
      },{
        thumb: imgPricing2,
        name: 'Bacon',
        price: 'Ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Lorem',
        services:[
            {
                content: 'Lorem',
                className: '--on'
            },
            {
                content: 'lorem ipsum',
                className: '--on'
            },
            {
                content: 'lipsum',
                className: '--on'
            },
            {
                content: 'delorem',
                className: '--on'
            },
            {
                content: 'Sit',
                className: '--off'
            }
        ]
      },
      {
        thumb: imgPricing3,
        name: 'Steak',
        price: 'Ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Lorem',
        services:[
            {
                content: 'Sit.',
                className: '--on'
            },
            {
                content: 'Amaeur',
                className: '--on'
            },
            {
                content: 'Sit',
                className: '--on'
            },
            {
                content: 'Delorum',
                className: '--on'
            },
            {
                content: 'Veleur',
                className: '--on'
            }
        ]
      }
      
    ]
    
  };
  export default data;
  