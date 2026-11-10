// Square Appointments booking page. Paste the link here; until then "Book" buttons fall back to calling.
const BOOKING_URL = 'https://book.squareup.com/appointments/5rtbwfur9uolzr/location/LCQ194PADZA5Y/services';

export const BUSINESS = {
  bookingUrl: BOOKING_URL,
  name: 'R&C Barbershop',
  phoneDisplay: '(609) 310-8842',
  phoneHref: 'tel:+16093108842',
  address: '798 Chambers St, Trenton, NJ 08611',
  mapsUrl:
    'https://www.google.com/maps/place/R%26C+Barbershop/@40.2129966,-74.7423277,17z/data=!3m1!4b1!4m6!3m5!1s0x89c159d12528aba7:0x647c4fa49664b332!8m2!3d40.2129966!4d-74.7397474!16s%2Fg%2F11t7d2ktfm',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=R%26C+Barbershop+798+Chambers+St+Trenton+NJ+08611',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=R%26C+Barbershop,+798+Chambers+St,+Trenton,+NJ+08611&z=16&output=embed',
  hours: [
    { day: 'Monday', time: '9 AM – 7 PM' },
    { day: 'Tuesday', time: '9 AM – 7 PM' },
    { day: 'Wednesday', time: '9 AM – 7 PM' },
    { day: 'Thursday', time: '8 AM – 8 PM' },
    { day: 'Friday', time: '8 AM – 8 PM' },
    { day: 'Saturday', time: '8 AM – 8 PM' },
    { day: 'Sunday', time: '9 AM – 4 PM' },
  ],
};

export const hasBooking = (barberUrl?: string) => Boolean(barberUrl || BUSINESS.bookingUrl);
// Where a "Book" button goes: barber's own Square link > general Square link > phone call.
export const bookHref = (barberUrl?: string) => barberUrl || BUSINESS.bookingUrl || BUSINESS.phoneHref;
