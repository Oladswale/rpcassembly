import { useState, useEffect, useMemo, useCallback } from 'react'
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import SermonCard from '@/components/ui/sermon-card'
import Input from '@/components/ui/input'
import { sermons, SermonType } from '@/types/data'
import { useDebounce } from '@/hooks/useDebounce'

const PER_PAGE = 6

function extractMonth(dateStr: string): string {
    const date = new Date(dateStr)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    return `${year}-${month}`
}

function formatMonthLabel(ym: string): string {
    const [year, month] = ym.split('-')
    const m = new Date(Number(year), Number(month) - 1).toLocaleString('en-US', { month: 'long' })
    return `${m} ${year}`
}

const monthOptions = [...new Set(sermons.map((s) => extractMonth(s.date)))].sort()

type SortOption = 'newest' | 'oldest' | 'az' | 'za'

interface FetchParams {
    search: string
    month: string
    sort: SortOption
    page: number
    perPage: number
}

interface FetchResult {
    data: SermonType[]
    total: number
    totalPages: number
}

// Simulating api get

async function fetchSermons(params: FetchParams): Promise<FetchResult> {
    let result: SermonType[] = sermons

    if (params.search.trim()) {
        const q = params.search.toLowerCase()
        result = result.filter(
            (s) =>
                s.title.toLowerCase().includes(q) ||
                s.speaker.toLowerCase().includes(q) ||
                s.description.toLowerCase().includes(q),
        )
    }

    if (params.month) {
        result = result.filter((s) => extractMonth(s.date) === params.month)
    }

    result = [...result].sort((a, b) => {
        switch (params.sort) {
            case 'newest':
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            case 'oldest':
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            case 'az':
                return a.title.localeCompare(b.title)
            case 'za':
                return b.title.localeCompare(a.title)
            default:
                return 0
        }
    })

    const total = result.length
    const totalPages = Math.max(1, Math.ceil(total / params.perPage))
    const safePage = Math.min(params.page, totalPages)
    const data = result.slice((safePage - 1) * params.perPage, safePage * params.perPage)

    // Simulate network latency — remove when using real API
    await new Promise((r) => setTimeout(r, 200))

    return { data, total, totalPages }
}

const SermonsSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedMonth, setSelectedMonth] = useState('')
    const [sortBy, setSortBy] = useState<SortOption>('newest')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [sermonData, setSermonData] = useState<FetchResult>({ data: [], total: 0, totalPages: 0 })

    const debouncedSearch = useDebounce(searchQuery, 300)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)

        fetchSermons({
            search: debouncedSearch,
            month: selectedMonth,
            sort: sortBy,
            page: currentPage,
            perPage: PER_PAGE,
        })
            .then((res) => {
                if (!cancelled) {
                    setSermonData(res)
                    setLoading(false)
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : 'Failed to load sermons.')
                    setLoading(false)
                }
            })

        return () => {
            cancelled = true
        }
    }, [debouncedSearch, selectedMonth, sortBy, currentPage])

    const goToPage = useCallback(
        (page: number) => {
            if (page >= 1 && page <= sermonData.totalPages) {
                setCurrentPage(page)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        },
        [sermonData.totalPages],
    )

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        setCurrentPage(1)
    }, [])

    const handleMonthChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value)
        setCurrentPage(1)
    }, [])

    const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value as SortOption)
        setCurrentPage(1)
    }, [])

    return (
        <section className='bg-white py-16 md:py-24'>
            <div className='max-w-7xl mx-auto px-4'>
                <SectionHeader className='text-center'>
                    Our <span className='text-royal-purple'>Sermons</span>
                </SectionHeader>
                <HorizontalLine className='mx-auto mt-2 mb-3' />
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-xl'>
                    Explore our collection of life-transforming messages.
                </p>

                {/* Search, Filter & Sort */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-10'>
                    <div className='relative w-full sm:max-w-xs'>
                        <Search size={18} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                        <Input
                            placeholder='Search sermons...'
                            value={searchQuery}
                            onChange={handleSearch}
                            className='pl-10'
                        />
                    </div>

                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className='w-full sm:w-44 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 appearance-none cursor-pointer'
                    >
                        <option value=''>All Months</option>
                        {monthOptions.map((ym) => (
                            <option key={ym} value={ym}>
                                {formatMonthLabel(ym)}
                            </option>
                        ))}
                    </select>

                    <div className='relative w-full sm:w-44'>
                        <ArrowUpDown size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' />
                        <select
                            value={sortBy}
                            onChange={handleSortChange}
                            className='w-full rounded-lg border border-gray-300 bg-white pl-9 pr-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 appearance-none cursor-pointer'
                        >
                            <option value='newest'>Newest First</option>
                            <option value='oldest'>Oldest First</option>
                            <option value='az'>A - Z</option>
                            <option value='za'>Z - A</option>
                        </select>
                    </div>
                </div>

                {/* Results count */}
                {!loading && !error && (
                    <p className='text-center text-sm text-gray-500 mb-6'>
                        Showing {sermonData.data.length} of {sermonData.total} sermon{sermonData.total !== 1 ? 's' : ''}
                    </p>
                )}

                {/* Loading State */}
                {loading && (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <Loader2 size={36} className='text-royal-purple animate-spin mb-4' />
                        <p className='text-gray-500'>Loading sermons...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <AlertCircle size={36} className='text-red-400 mb-4' />
                        <p className='text-gray-500 mb-2'>{error}</p>
                        <button
                            onClick={() => {
                                setCurrentPage(1)
                                setSearchQuery('')
                                setSelectedMonth('')
                                setSortBy('newest')
                            }}
                            className='text-sm text-royal-purple hover:underline'
                        >
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && sermonData.data.length === 0 && (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <Search size={40} className='text-gray-300 mb-4' />
                        <h3 className='text-xl font-semibold text-deep-navy mb-1'>No sermons found</h3>
                        <p className='text-gray-500 mb-4'>Try adjusting your search or filter criteria.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('')
                                setSelectedMonth('')
                                setSortBy('newest')
                                setCurrentPage(1)
                            }}
                            className='text-sm text-royal-purple hover:underline font-medium'
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Sermon Grid */}
                {!loading && !error && sermonData.data.length > 0 && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {sermonData.data.map((sermon) => (
                            <SermonCard key={sermon.id} {...sermon} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {!loading && !error && sermonData.totalPages > 1 && (
                    <div className='flex items-center justify-center gap-2 mt-12'>
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage <= 1}
                            className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:border-royal-purple hover:text-royal-purple disabled:opacity-30 disabled:cursor-not-allowed transition-all'
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {Array.from({ length: sermonData.totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`flex items-center justify-center w-10 h-10 rounded-lg text-sm font-semibold transition-all ${
                                    page === currentPage
                                        ? 'bg-royal-purple text-white'
                                        : 'border border-gray-300 text-gray-600 hover:border-royal-purple hover:text-royal-purple'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage >= sermonData.totalPages}
                            className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:border-royal-purple hover:text-royal-purple disabled:opacity-30 disabled:cursor-not-allowed transition-all'
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SermonsSection
