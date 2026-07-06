import { useEffect, useCallback } from 'react';
import { X, MapPin, CalendarDays, Clock } from 'lucide-react';
import type { CalendarEventData } from '@/types/events';

interface EventModalProps {
    event: CalendarEventData | null;
    isOpen: boolean;
    isClosing: boolean;
    onClose: () => void;
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);

    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function formatEndDate(dateStr: string): string {
    const date = new Date(dateStr);
    date.setDate(date.getDate() - 1);

    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function getDurationText(duration?: number): string {
    if (!duration || duration <= 1) {
        return '1 day';
    }

    return `${duration} days`;
}

export default function EventModal({
    event,
    isOpen,
    isClosing,
    onClose,
}: EventModalProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || !event) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
        >
            {/* Backdrop */}
            <button
                type="button"
                className={`fixed inset-0 cursor-default transition-all duration-300 ${
                    isClosing
                        ? 'bg-black/0 backdrop-blur-none'
                        : 'bg-black/50 backdrop-blur-sm'
                }`}
                onClick={onClose}
                aria-label="Close modal"
            />

            {/* Modal content */}
            <div
                className={`relative w-full max-w-lg transform transition-all duration-300 ${
                    isClosing
                        ? 'scale-95 opacity-0 translate-y-4'
                        : 'scale-100 opacity-100 translate-y-0'
                }`}
            >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                    {/* Color accent bar */}
                    <div
                        className="h-2 w-full"
                        style={{ backgroundColor: event.color || '#6c2bd9' }}
                    />

                    {/* Close button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                        {/* Title */}
                        <h2
                            id="event-modal-title"
                            className="font-serif text-2xl font-bold text-deep-navy sm:text-3xl"
                        >
                            {event.title}
                        </h2>

                        {/* Event details */}
                        <div className="mt-6 space-y-4">
                            {/* Location */}
                            {event.location && (
                                <div className="flex items-start gap-3">
                                    <div
                                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                                        style={{
                                            backgroundColor: `${event.color || '#6c2bd9'}15`,
                                        }}
                                    >
                                        <MapPin
                                            size={16}
                                            className="text-royal-purple"
                                            style={{
                                                color: event.color || '#6c2bd9',
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Location
                                        </p>
                                        <p className="mt-0.5 text-sm font-medium text-gray-800">
                                            {event.location}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Date */}
                            <div className="flex items-start gap-3">
                                <div
                                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                        backgroundColor: `${event.color || '#6c2bd9'}15`,
                                    }}
                                >
                                    <CalendarDays
                                        size={16}
                                        className="text-royal-purple"
                                        style={{
                                            color: event.color || '#6c2bd9',
                                        }}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        {event.duration && event.duration > 0 ? 'Start Date' : 'Date'}
                                    </p>
                                    <p className="mt-0.5 text-sm font-medium text-gray-800">
                                        {formatDate(event.start)}
                                    </p>
                                </div>
                            </div>

                            {/* End date (multi-day only) */}
                            {event.duration && event.duration > 0 && (
                                <div className="flex items-start gap-3">
                                    <div
                                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                                        style={{
                                            backgroundColor: `${event.color || '#6c2bd9'}15`,
                                        }}
                                    >
                                        <Clock
                                            size={16}
                                            className="text-royal-purple"
                                            style={{
                                                color: event.color || '#6c2bd9',
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            End Date
                                        </p>
                                        <p className="mt-0.5 text-sm font-medium text-gray-800">
                                            {formatEndDate(event.end)}
                                        </p>
                                        <p className="mt-0.5 text-xs text-gray-500">
                                            Duration: {getDurationText(event.duration)}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        {event.description && (
                            <div className="mt-6 border-t border-gray-100 pt-6 max-h-48 overflow-y-auto">
                                <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">
                                    {event.description}
                                </p>
                            </div>
                        )}

                        {/* Close button */}
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
                                style={{
                                    backgroundColor: event.color || '#6c2bd9',
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
