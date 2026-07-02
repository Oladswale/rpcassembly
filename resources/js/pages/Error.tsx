import { Head, Link } from '@inertiajs/react'

interface ErrorProps {
    status: number
}

const messages: Record<number, { title: string; description: string }> = {
    403: {
        title: 'Access Denied',
        description: 'You do not have permission to access this page.',
    },
    404: {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist or has been moved.',
    },
    500: {
        title: 'Server Error',
        description: 'Something went wrong on our end. Please try again later.',
    },
    503: {
        title: 'Service Unavailable',
        description: 'We are currently undergoing maintenance. Please check back soon.',
    },
}

export default function Error({ status }: ErrorProps) {
    const message = messages[status] ?? {
        title: 'Unexpected Error',
        description: 'An unexpected error occurred. Please try again.',
    }

    return (
        <>
            <Head title={`${status} | ${message.title}`} />

            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-deep-purple to-royal-purple">
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-lg mx-auto">
                            <span className="text-8xl md:text-9xl font-black text-white/10 select-none block leading-none">
                                {status}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-white -mt-4">
                                {message.title}
                            </h1>
                            <p className="text-white/70 mt-3 text-base md:text-lg">
                                {message.description}
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-lg bg-accent-gold px-6 py-3 text-sm font-semibold text-deep-navy hover:bg-accent-gold/90 transition-all"
                                >
                                    Go Home
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
