import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Sushi Lovers First Meetup',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    address: '123 Main St. Hometown, ST 00001',
    description: 'This is the very first meet up.',
  },
  {
    id: 'm2',
    title: 'Sushi Lovers Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/220px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg',
    address: '123 Main St. Hometown, ST 00001',
    description: 'This is the very first meet up.',
  },
  {
    id: 'm3',
    title: 'Sushi Lovers Third Meetup',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    address: '123 Main St. Hometown, ST 00001',
    description: 'This is the very first meet up.',
  },
];

function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
}

export default HomePage;
