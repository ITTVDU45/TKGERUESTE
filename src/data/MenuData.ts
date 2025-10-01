
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        mega_menus?: {
            link: string;
            title: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "Über uns",
        link: "/about",
        has_dropdown: false,
    },
    {
        id: 3,
        title: "Leistungen",
        link: "/services",
        has_dropdown: false,
    },
    {
        id: 4,
        title: "Projekte",
        link: "/projects",
        has_dropdown: false,
    },
    {
        id: 5,
        title: "Kontakt",
        link: "/contact",
        has_dropdown: false,
    },
    {
        id: 6,
        title: "Mehr",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog-grid", title: "Blog" },
            { link: "/faq", title: "FAQ" },
            { link: "/legal/datenschutz", title: "Datenschutz" },
        ],
    },
];

export default menu_data;