import Accordion from '../components/Accordion';

const AccordionPage = () => {
    const items = [
        {
            id: 'sdasd',
            label: 'Can I use React on a project?',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laborum cumque rem, temporibus itaque, veritatis nemo ipsa unde consectetur, velit ab praesentium odio officia laboriosam rerum natus incidunt ea assumenda',
        },
        {
            id: 'dasasd',
            label: 'Can I use Javascript on a project?',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laborum cumque rem, temporibus itaque, voremque quibusdam saepe deleniti in est? Veniam vitae voluptate ad unde explicabo quasi aliquid delectus',
        },
        {
            id: 'asdtghyhnyj',
            label: 'Can I use CSS on a project?',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laborum cumque rem, temporibus itaque, vibusdam saepe deleniti in est? Veniam vitae voluptate ad unde explicabo quasi aliquid delectus',
        },
    ];

    return <Accordion items={items} />;
};
export default AccordionPage;
