import React from 'react';
import {
    Header,
    About,
    Progress,
    Clients,
    Video,
    Features,
    Screenshot,
    Pricing,
    OurFeatures,
} from '../components';
import db from '../db.json';

import gallery_1 from '../images/gallery-1.jpg';
import gallery_2 from '../images/gallery-2.jpg';
import gallery_3 from '../images/gallery-3.jpg';
import gallery_4 from '../images/gallery-4.jpg';

const aboutItems = {
    underTitle: 'KorallWeb',
    title: 'KorallWeb - digital агентство не для слабонервных.',
    text: 'Готовы воплотить Вашу самую бредовую идею в жизнь.',
};

const videoItems = [
    {
        underTitle: 'VIDEO FEATURES',
        title: 'Grat Application Ever',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.',
    },
];

const featuresItems = {
    underTitle: 'FEATURES',
    title: 'Pawerful Features As Always',
    items1: [
        {
            title: 'Fast & Powerful',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            styleClass: 'lnr-rocket',
        },
        {
            title: 'Easily Editable',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            styleClass: 'lnr-paperclip',
        },
        {
            title: 'Cloud Storage',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            styleClass: 'lnr-cloud-download',
        },
    ],
    items2: [
        {
            title: 'Easy Notifications',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            styleClass: 'lnr-clock',
        },
        {
            title: 'Fully Responsive',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            styleClass: 'lnr-laptop-phone',
        },
        {
            title: 'Editable Layout',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            styleClass: 'lnr-cog',
        },
    ],
};

const our = {
    underTitle: 'FEATURES',
    title: 'Pawerful Features As Always',
    text:
        'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.',
    ourItems: [
        {
            icon: 'lnr-clock',
            title: 'Easy Notifications',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
        },
        {
            icon: 'lnr-laptop-phone',
            title: 'Fully Responsive',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
        },
        {
            icon: 'lnr-cog',
            title: 'Editable Layout',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
        },
    ],
};

const procingItems = {
    underTitle: 'ПРАЙС',
    title: 'Полный список наших продуктов',
    items: [
        {
            icon: 'lnr-rocket',
            title: 'Landing page',
            list: ['Easy Installations', 'Unlimited support', 'Uniqe Elements'],
            price: '10.000',
            buttonPrice: 'Заказать',
        },
        {
            icon: 'lnr-diamond',
            title: 'Корпоративный',
            list: ['Easy Installations', 'Unlimited support', 'Free Forever'],
            price: '25.000',
            buttonPrice: 'Заказать',
        },
        {
            icon: 'lnr-pie-chart',
            title: 'Сайт-приложение',
            list: ['Easy Installations', 'Unlimited support', 'Free Forever'],
            price: '50.000',
            buttonPrice: 'Заказать',
        },
    ],
};

const screenshot = [gallery_1, gallery_2, gallery_3, gallery_4];

function Home() {
    const clients = db;

    return (
        <div>
            <Header />
            <About aboutItems={aboutItems} />
            <Progress />
            <Video videoItems={videoItems} />
            <Features featuresItems={featuresItems} />
            <Clients clients={clients.clients} />
            <Screenshot screenshot={screenshot} />
            <Pricing procingItems={procingItems} />
            <OurFeatures our={our} />
        </div>
    );
}

export default Home;
