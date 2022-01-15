import { MouseEvent, MutableRefObject } from "react";

export function clearHeight(itens: HTMLDivElement[]) {
    itens.forEach(function (item) {
        if (item) {
            item.classList.remove("active");
            item.style.height = "75px";
        }
    });
}

export function handleOpen(
    refItens: MutableRefObject<HTMLDivElement[]>,
    e: MouseEvent<Element>,
    key: number
) {
    let el = refItens.current[key];

    let altura = (el.querySelector(".conteudo") as HTMLElement).offsetHeight;

    const checkClass = (e.target as Element).classList.value;
    const checkTag = (e.target as Element).tagName;
    const elementosDisable = [
        "toggle",
        "active toggle",
        "false toggle",
        "undefined toggle",
    ];

    const tagsDisable = ["SPAN"];

    if (
        !elementosDisable.includes(checkClass) &&
        !tagsDisable.includes(checkTag)
    ) {
        if (el?.classList.value.includes("active")) {
            el.style.height = "75px";
            el.classList.remove("active");
        } else {
            clearHeight(refItens.current);
            el?.classList.add("active");

            if (el) {
                el.style.height = altura + "px";
            }
        }
    }
}
