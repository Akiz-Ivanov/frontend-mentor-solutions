import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const SubjectRadioGroup = (): React.JSX.Element => {
    return (
        <FormField
            name="subject"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="required-label">Query Type</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col md:flex-row gap-2 md:gap-4"
                        >
                            <label
                                htmlFor="r1"
                                className="cursor-pointer flex items-center space-x-4 rounded-primary border-1 outline-none border-input transition-all has-[:checked]:bg-primary-light
                          has-[:checked]:border-primary md:w-1/2 p-3 px-6"
                            >
                                <RadioGroupItem
                                    value="General Enquiry"
                                    id="r1"
                                />
                                <span className="radio-label-text text-16-18 tracking-wide">General Enquiry</span>
                            </label>

                            <label
                                htmlFor="r2"
                                className="cursor-pointer flex items-center space-x-4 rounded-primary border-1 outline-none border-input transition-all has-[:checked]:bg-primary-light
                          has-[:checked]:border-primary md:w-1/2 p-3 px-6"
                            >
                                <RadioGroupItem
                                    value="Support Request"
                                    id="r2"
                                />
                                <span className="radio-label-text text-16-18 tracking-wide">Support Request</span>
                            </label>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SubjectRadioGroup