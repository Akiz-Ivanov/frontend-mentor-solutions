const SubmitButton = (): React.JSX.Element => {
    return (
        <button
            type="submit"
            className="w-full bg-primary hover:bg-[#063f36] py-4 rounded-primary transition-colors text-white cursor-pointer
                focus-visible:border-ring focus-visible:ring-ring/80 focus-visible:ring-[5px]
                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:cursor-auto"
        >
            Submit
        </button>
    )
}

export default SubmitButton