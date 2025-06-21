import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "./components/form/ContactForm"
import { Toaster } from 'react-hot-toast';

function App(): React.JSX.Element {

  return (
    <main className="px-16-120 py-6 md:px-6">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            maxWidth: '480px',
            backgroundColor: "var(--color-grey-900)",
            color: "white",
          },
        }}
      />
      <Card className="w-full max-w-[46.25rem]">
        <CardContent className="text-foreground w-full space-y-6">

          <h1>Contact Us</h1>

          <ContactForm />

        </CardContent>
      </Card>
    </main>
  )
}

export default App
