import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import iconSuccessCheck from "../../assets/images/icon-success-check.svg"
import toast from 'react-hot-toast';
import { Form } from "@/components/ui/form"

import EmailInput from "./EmailInput"
import NameInputGroup from "./NameInputGroup"
import SubjectRadioGroup from "./SubjectRadioGroup"
import MessageTextarea from "./MessageTextarea"
import ConsentCheckbox from "./ConsentCheckbox"
import SubmitButton from "./SubmitButton"


const formSchema = z.object({
    firstName: z.string().nonempty("This field is required").max(30),
    lastName: z.string().nonempty("This field is required").max(30),
    email: z.string().nonempty("This field is required").email("Please enter a valid email address"),
    subject: z.string().nonempty("Please select a query type"),
    message: z.string().nonempty("This field is required").min(10, "Message must be at least 10 characters").max(800, "Message must be less than 800 characters"),
    consentToContact: z.literal(true, {
        errorMap: () => ({
            message: "To submit this form, please consent to being contacted",
        }),
    }),
})

export type FormSchema = z.infer<typeof formSchema>

const ContactForm = (): React.JSX.Element => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            consentToContact: undefined as true | undefined
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)

        toast(
            <div role="status" aria-live="polite" className="flex flex-col justify-center gap-3 p-3 w-full">
                <div className="flex flex-row items-center gap-2 w-full">
                    <img src={iconSuccessCheck} alt="Success" />
                    <h1 className="text-lg font-semibold tracking-wider">Message Sent!</h1>
                </div>
                <p className="text-base font-normal text-gray-300">Thanks for completing the form. We'll be in touch soon!</p>
            </div>,
            {
                duration: 3000,
            }
        )

        form.reset()
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-6"
            >

                <NameInputGroup />

                <EmailInput />

                <SubjectRadioGroup />

                <MessageTextarea />

                <ConsentCheckbox />

                <SubmitButton />

            </form>
        </Form>
    )
}

export default ContactForm