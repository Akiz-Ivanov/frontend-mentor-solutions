import { Input } from "@/components/ui/input"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const EmailInput = (): React.JSX.Element => {

    return (
        <FormField
            key="email"
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="required-label" htmlFor="email">
                        Email Address
                    </FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            id="email"
                            type="email"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default EmailInput