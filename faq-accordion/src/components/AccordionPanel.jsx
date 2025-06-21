import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import plus from "/src/assets/images/icon-plus.svg"
import minus from "/src/assets/images/icon-minus.svg"

export default function AccordionPanel({ title, text }) {
    return (
        <div className="w-full border-b-2 border-purple-100 last:border-none pb-4">
            <Disclosure>
                {({ open }) => (
                    <div>
                        <DisclosureButton className="group flex flex-row justify-between items-center w-full cursor-pointer gap-14
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 "
                        >
                            <span className="font-semibold text-left text-purple-950 w-full group-hover:text-purple-600 group-focus-visible:text-purple-600">{title}</span>
                            <img src={open ? minus : plus} className="w-8 h-8" alt="" aria-hidden="true" />
                        </DisclosureButton>

                        <DisclosurePanel className="py-4 font-normal text-purple-950 opacity-65">
                            <p>{text}</p>
                        </DisclosurePanel>
                    </div>
                )}
            </Disclosure>
        </div>
    )
}