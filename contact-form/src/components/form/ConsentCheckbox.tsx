import { Checkbox } from "@/components/ui/checkbox"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const ConsentCheckbox = (): React.JSX.Element => {
    return (
        <FormField
            name="consentToContact"
            render={({ field }) => (
                <FormItem className="my-3">
                    <FormControl>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                {...field}
                                id="consentToContact"
                                onCheckedChange={field.onChange}
                                className="cursor-pointer"
                            />
                            <FormLabel htmlFor="consentToContact" className="required-label checkbox-label cursor-pointer select-none px-3">
                                I consent to being contacted by the team
                            </FormLabel>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default ConsentCheckbox