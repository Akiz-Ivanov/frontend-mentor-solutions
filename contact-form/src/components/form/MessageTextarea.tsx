import { Textarea } from "@/components/ui/textarea"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const MessageTextarea = (): React.JSX.Element => {
    return (
        <FormField
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormLabel htmlFor="message" className="required-label">Message</FormLabel>
                    <FormControl>
                        <Textarea
                            {...field}
                            id="message"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default MessageTextarea