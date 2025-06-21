import FocusLock from 'react-focus-lock';
import { useState, useRef } from 'react'
import drawersImg from './assets/images/drawers.jpg'
import SharePopover from './components/ui/Popover/SharePopover'
import ShareButton from './components/ui/ShareButton'
import ArticleText from './components/ArticleText'
import AuthorInfo from './components/AuthorInfo'
import { useWindowSize } from './components/ui/Popover/hooks/useWindowSize'

function App() {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Passed to SharePopover and ShareButton for positioning logic and event handling
  const buttonRef = useRef<HTMLButtonElement>(null);

  function togglePopover(): void {
    setIsPopoverOpen(!isPopoverOpen);
  };

  function onClose(): void {
    setIsPopoverOpen(false);
  }

  const size = useWindowSize(onClose);

  return (
    <main className='p-20-120 md:p-5'>
      <article className='flex flex-col gap-2 rounded-xl bg-white shadow-2xl md:flex-row
      max-w-[50rem]
      '>

        {/* Article image */}
        <figure className="rounded-t-xl md:rounded-t-none md:rounded-l-xl overflow-hidden md:h-auto basis-2/5">
          <img
            src={drawersImg}
            alt="drawers"
            className="w-full h-full object-cover object-left"
          />
        </figure>


        {/* Article content */}
        <div className='md:px-8 md:py-10 md:space-y-4 basis-3/5'>

          <ArticleText />

          <footer>
            <div className='flex items-center justify-between mt-4 text-sm relative py-5 px-8 md:mt-0 md:px-0 md:py-0'>

              {/* Author avatar + name + date */}
              <AuthorInfo />

              {/* Share section (desktop + mobile) with button */}
              <FocusLock disabled={!isPopoverOpen} returnFocus>

                {/* Mobile and desktop share popovers rendered in parallel and conditionally styled inside */}
                <SharePopover isPopoverOpen={isPopoverOpen} variant="mobile" buttonRef={buttonRef} onClose={onClose} />
                <SharePopover isPopoverOpen={isPopoverOpen} variant="desktop" buttonRef={buttonRef} onClose={onClose} size={size} />

                {/* The trigger button for isPopoverOpening the share popover */}
                <ShareButton ref={buttonRef} isPopoverOpen={isPopoverOpen} togglePopover={togglePopover} />
              </FocusLock>

            </div>
          </footer>

        </div>

      </article>
    </main>
  )
};

export default App
