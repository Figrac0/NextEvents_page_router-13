// dummy-data.js
const DUMMY_EVENTS = [
    {
        id: "e1",
        title: "AI Revolution Summit 2024",
        description:
            "Join leading AI experts and innovators for a deep dive into the future of artificial intelligence. Network with pioneers and discover groundbreaking technologies.",
        location:
            "Tech Convention Center, 123 Innovation Drive, San Francisco, CA 94107",
        date: "2024-03-15T09:00:00",
        image: "images/coding-event.jpg",
        category: "Technology",
        isFeatured: true,
        price: 299,
        seats: 500,
        speakers: ["Dr. Jane Smith", "Prof. John Doe", "Elon Musk Jr."],
        tags: ["AI", "Machine Learning", "Tech", "Innovation"],
    },
    {
        id: "e2",
        title: "Digital Marketing Masterclass",
        description:
            "Advanced strategies for modern marketers. Learn from industry leaders about SEO, social media, and conversion optimization in the digital age.",
        location: "Business Hub, 456 Market Street, New York, NY 10001",
        date: "2024-04-22T10:00:00",
        image: "images/introvert-event.jpg",
        category: "Marketing",
        isFeatured: true,
        price: 199,
        seats: 200,
        speakers: ["Sarah Johnson", "Mike Chen", "Emma Wilson"],
        tags: ["Marketing", "Digital", "SEO", "Social Media"],
    },
    {
        id: "e3",
        title: "Startup Funding Conference",
        description:
            "Connect with investors and learn how to secure funding for your startup. Pitch sessions, investor panels, and networking opportunities.",
        location: "Venture Capital Hall, 789 Startup Alley, Austin, TX 73301",
        date: "2024-05-10T08:30:00",
        image: "images/extrovert-event.jpg",
        category: "Business",
        isFeatured: true,
        price: 349,
        seats: 300,
        speakers: ["Mark Cuban", "Peter Thiel", "Sara Blakely"],
        tags: ["Startup", "Funding", "VC", "Entrepreneurship"],
    },
    {
        id: "e4",
        title: "Web Development Bootcamp",
        description:
            "Intensive workshop covering modern web development technologies. Hands-on experience with React, Next.js, and cloud deployment.",
        location: "Code Academy, 101 Dev Street, Seattle, WA 98101",
        date: "2024-06-05T09:00:00",
        image: "images/coding-event.jpg",
        category: "Technology",
        isFeatured: false,
        price: 149,
        seats: 100,
        speakers: ["Alex Taylor", "Maria Garcia", "David Kim"],
        tags: ["Web Dev", "React", "Next.js", "Programming"],
    },
    {
        id: "e5",
        title: "Leadership Excellence Forum",
        description:
            "Develop essential leadership skills and learn strategies for effective team management in the modern workplace.",
        location: "Leadership Center, 202 Corporate Plaza, Chicago, IL 60601",
        date: "2024-07-18T13:00:00",
        image: "images/introvert-event.jpg",
        category: "Leadership",
        isFeatured: false,
        price: 249,
        seats: 150,
        speakers: ["Simon Sinek", "Brene Brown", "Satya Nadella"],
        tags: ["Leadership", "Management", "Team Building"],
    },
    {
        id: "e6",
        title: "Sustainable Tech Conference",
        description:
            "Exploring sustainable technology solutions for a better future. Green tech innovations and environmental impact discussions.",
        location: "Eco Center, 303 Green Way, Portland, OR 97201",
        date: "2024-08-25T10:00:00",
        image: "images/extrovert-event.jpg",
        category: "Environment",
        isFeatured: true,
        price: 179,
        seats: 250,
        speakers: ["Greta Thunberg", "Bill Gates", "Dr. Wangari"],
        tags: ["Sustainability", "Green Tech", "Environment"],
    },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        );
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getEventsByCategory(category) {
    return DUMMY_EVENTS.filter((event) => event.category === category);
}

export function getUpcomingEvents() {
    const today = new Date();
    return DUMMY_EVENTS.filter((event) => new Date(event.date) > today).sort(
        (a, b) => new Date(a.date) - new Date(b.date),
    );
}
