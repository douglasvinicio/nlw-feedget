export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto sm:w-auto">
            <header>
                <span className="text-xl leading-6">Leave your feedback</span>
            </header>

            <p>Hello World</p>

            <footer className="text-xs text-neutral-400">
                Made with ♥ by 
                <a className="underline underline-offset-2" href="https://www.linkedin.com/in/douglasvinicio/"> Douglas</a> and 
                <a className="underline underline-offset-2" href="https://rokcetseat.com"> RocketSeat</a>
            </footer>
        </div>
    )
}