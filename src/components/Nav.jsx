import React from "react"
import { Drawer } from "@heroui/react"

const items = [
    { id: 1, name: "home", path: "#hero", className: "fa-solid fa-house" },
    { id: 2, name: "about", path: "#about", className: "fa-solid fa-user" },
    { id: 3, name: "skills", path: "#skills", className: "fa-solid fa-star" },
    { id: 4, name: "projects", path: "#projects", className: "fa-solid fa-briefcase" },
    { id: 5, name: "contact", path: "#contact", className: "fa-solid fa-message" },
]

function Nav({ state }) {
    const goTo = (path) => {
        state.close()
        const el = document.querySelector(path)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <Drawer.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen} variant="blur">
            <Drawer.Content placement="left">
                <Drawer.Dialog aria-label="Navigation" className="w-72 max-w-[85vw] gap-0 p-0!">
                    <Drawer.CloseTrigger />
                    <Drawer.Body className="gap-0 px-3.5 pt-14 pb-4">
                        <nav className="flex flex-col gap-0.5">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => goTo(item.path)}
                                    className="group flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-foreground capitalize transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:bg-accent/10 focus-visible:text-accent"
                                >
                                    <span className="flex size-8 flex-none items-center justify-center rounded-lg bg-default transition-colors duration-200 group-hover:bg-accent">
                                        <i
                                            className={`${item.className} text-sm text-accent transition-colors duration-200 group-hover:text-accent-foreground`}
                                        />
                                    </span>
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </Drawer.Body>
                </Drawer.Dialog>
            </Drawer.Content>
        </Drawer.Backdrop>
    )
}

export default Nav
