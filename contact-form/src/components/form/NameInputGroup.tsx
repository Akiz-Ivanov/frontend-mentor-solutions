import { Input } from "@/components/ui/input"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import type { FormSchema } from "./ContactForm"

type FormFieldType = {
    name: keyof Pick<FormSchema, "firstName" | "lastName">
    label: string
    type: string
}

const formNameInputs: FormFieldType[] = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
]

const NameInputGroup = (): React.JSX.Element => {

    const renderNameInputs: React.JSX.Element[] = formNameInputs.map(({ name, label, type }) => {
        return (
            <FormField
                key={name}
                name={name}
                render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                        <FormLabel className="required-label" htmlFor={name}>
                            {label}
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                id={name}
                                type={type}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        )
    })

    return (
        <div className="flex flex-col w-full md:flex-row gap-6 md:gap-4">
            {renderNameInputs}
        </div>
    )
}

export default NameInputGroup