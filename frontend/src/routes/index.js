import ProductsPage from "../pages/ProductsPage/ProductsPage";
import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFound from "../pages/NotFound/NotFound";

//chi can setuo ben duoi ben tren se auto import
export const routes =[
    {
        path: "/",
        page: HomePage,
        isShowHeader: true // Them vao nhung component nao can them header
    },
    {
        path: "/homepage",
        page: HomePage,
        isShowHeader: true // Them vao nhung component nao can them header
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: "/products",
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: "*",
        page: NotFound,
        isShowHeader: true
    },
]