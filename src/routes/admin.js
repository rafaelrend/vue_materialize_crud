import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import AuthorList from '../views/cadastros/author/List.vue';
import BookList from '../views/cadastros/book/List.vue';
import Auth from './auth';

let adminRoutes = {
    path: "/admin",
    component: DashboardLayout,
    name: "Admin",
    icon: "settings",
    beforeEnter: Auth,
    redirect: "/admin/book",
    children: [
        {
            path: "book",
            name: "Book",
            icon: "book",
            components: { default: BookList }
        },
        {
            path: "author",
            name: "Author",
            icon: "person_pin",
            components: { default: AuthorList }
        },
     

    ]
};

export default adminRoutes;