import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'

const MapSection = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d126615.18048945606!2d3.8223811986006195!3d7.384751597040501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x10398f0dc05dda61%3A0x3a16e49f8e8d5be0!2sAroma%2C%208VGF%2BHXC%2C%20Expressway1%2C%20Ibadan%20110115%2C%20Oyo!3m2!1d7.3264042!2d3.8748826999999997!4m5!1s0x1039f2e9796a99d5%3A0x1929d226e56e2335!2sthe%20polytechnic%20ibadan%2C%20CVWJ%2B983%2C%20Olori%20Hall%20Road%2C%20Ibadan%20200116%2C%20Oyo!3m2!1d7.445871299999999!2d3.8807866!5e0!3m2!1sen!2sng!4v1782991991000!5m2!1sen!2sng"

    return (
        <section id="map-section" className='py-16 lg:py-24 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <SectionHeader className='text-center mb-12'>
                    Find <span className='text-royal-purple font-serif italic'>Us</span>
                    <HorizontalLine className='mx-auto' />
                </SectionHeader>

                <div className='relative'>
                    <div className='rounded-2xl overflow-hidden shadow-2xl h-full min-h-[600px]'>
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '600px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="RPC Assembly Location"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapSection
