import dashboardIcon from "../../public/dashboard.svg";
import ecommerceIcon from "../../public/ecommerce.svg";
import calenderIcon from "../../public/calender.svg";
import mailIcon from "../../public/mail.svg";
import chatIcon from "../../public/chat.svg";
import taskIcon from "../../public/task.svg";
import fileManagerIcon from "../../public/filemanager.svg";
import noteIcon from "../../public/note.svg";
import contactIcon from "../../public/contact.svg";

export interface MenuItemProps {
    label: string,
    path: string,
    icon: string,
    options?: Array<Option>,
    action?: () => void
}

export interface Option {
    label: string,
    path: string,
}

export const menuItems: Array<MenuItemProps> = [
    {
        path: "/",
        label: "Dashboard",
        icon: dashboardIcon,
    },
    {
        path: "/ecommerce",
        label: "E-Commerce",
        icon: ecommerceIcon,
        options: [
            {
                path: "/product",
                label: "Product",
            },
            {
                path: "/order",
                label: "Order",
            },
            {
                path: "/customer",
                label: "Customer",
            }
        ]
    },
    {
        path: "/calender",
        label: "Calendar",
        icon: calenderIcon,
    },
    {
        path: "/mail",
        label: "Mail",
        icon: mailIcon
    },
    {
        path: "/chat",
        label: "Chat",
        icon: chatIcon
    },
    {
        path: "/task",
        label: "Task",
        icon: taskIcon
    },
    {
        path: "/file",
        label: "File Manager",
        icon: fileManagerIcon
    },
    {
        path: "/note",
        label: "Note",
        icon: noteIcon
    },
    {
        path: "/contact",
        label: "Contacts",
        icon: contactIcon
    }
]