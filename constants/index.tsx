export const SidebarNavigationData = [
  {
    id: "s1",
    href: "/",
    icon: "/assets/graphics/dashboard.png",
    title: "Home",
  },
  {
    id: "s3",
    href: "/community",
    icon: "/assets/graphics/community.png",
    title: "Community",
  },
  {
    id: "s5",
    href: "/tags",
    icon: "/assets/graphics/price-tag.png",
    title: "Tags",
  },
];

export const InformationTagsNavigationData = [
  {
    id: "s1",
    href: "/",
    title: "Next.Js",
  },
  {
    id: "s2",
    href: "/",
    title: "React.Js",
  },
  {
    id: "s3",
    href: "/",
    title: "JavaScript",
  },
  {
    id: "s4",
    href: "/",
    title: "typescript",
  },
];

export const FilterButtonsData = [
  {
    id: "b0",
    title: "All",
    filter: "",
  },
  {
    id: "b1",
    title: "Recommended",
    filter: "recommended",
  },
  {
    id: "b2",
    title: "Newest",
    filter: "newest",
  },
  {
    id: "b3",
    title: "Frequent",
    filter: "frequent",
  },
];

export const ProgrammingLanguagesData = [
  { id: 0, name: "Select Language", value: "" },
  { id: 1, name: "JavaScript", value: "javascript" },
  { id: 2, name: "Python", value: "python" },
  { id: 3, name: "Java", value: "java" },
  { id: 4, name: "C++", value: "cpp" },
  { id: 5, name: "HTML", value: "html" },
  { id: 6, name: "CSS", value: "css" },
  { id: 7, name: "Ruby", value: "ruby" },
  { id: 8, name: "Swift", value: "swift" },
  { id: 9, name: "Go", value: "go" },
  { id: 10, name: "PHP", value: "php" },
  { id: 11, name: "TypeScript", value: "typescript" },
  { id: 12, name: "SQL", value: "sql" },
];

export const QuestionsData = [
  {
    id: "q1",
    questionId: "q1",
    title: "How to clone an array in JavaScript?",
    description:
      "Lorem ipsum dolor sit amet,```<h2>Js</h2>``` consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ```function cloneArray(arr) { return [...arr]```  Ut enim ad minim veniam, quis, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "t1", title: "javascript" },
      { id: "t2", title: "arrays" },
    ],
    user: "user123",
    votes: 10,
    downvotes: 10,
    language: "typescript",
    answers: [
      {
        id: "a1",
        user: "user123",
        description:
          "Lorem ipsum dolor sit amet,```<h2>Js</h2>``` consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ```function cloneArray(arr) { return [...arr]```  Ut enim ad minim veniam, quis, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        votes: 10,
        language: "typescript",
        downvotes: 10,
      },
    ],
    views: 100,
  },
  {
    id: "q2",
    questionId: "q1",
    title: "What is React and how does it work?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "t1", title: "javascript" },
      { id: "t2", title: "arrays" },
    ],
    user: "user456",
    votes: 15,
    downvotes: 20,
    language: "typescript",
    answers: [
      {
        id: "a1",
        user: "user123",
        description:
          "Lorem ipsum dolor sit amet,```<h2>Js</h2>``` consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ```function cloneArray(arr) { return [...arr]```  Ut enim ad minim veniam, quis, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        votes: 10,
        language: "typescript",
        downvotes: 10,
      },
    ],
    views: 200,
  },
  {
    id: "q3",
    questionId: "q1",
    title: "How to use map function in Python?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "t1", title: "javascript" },
      { id: "t2", title: "python" },
    ],
    user: "user789",
    votes: 5,
    downvotes: 8,
    language: "typescript",
    answers: [
      {
        id: "a1",
        user: "user123",
        description:
          "Lorem ipsum dolor sit amet,```<h2>Js</h2>``` consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ```function cloneArray(arr) { return [...arr]```  Ut enim ad minim veniam, quis, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        votes: 10,
        language: "typescript",
        downvotes: 10,
      },
    ],
    views: 50,
  },
];

export const CommunityUsers = [
  {
    id: 1,
    username: "user1",
    name: "John Doe",
    image: "user1.jpg",
    reputation: 100,
    tags: [
      { id: "t1", title: "Node.Js" },
      { id: "t2", title: "React.Js" },
      { id: "t3", title: "Next.Js" },
    ],
  },
  {
    id: 2,
    username: "user2",
    name: "Jane Smith",
    image: "user2.jpg",
    reputation: 150,
    tags: [
      { id: "t1", title: "Node.Js" },
      { id: "t2", title: "React.Js" },
      { id: "t3", title: "Next.Js" },
    ],
  },
  {
    id: 3,
    username: "user3",
    name: "Bob Johnson",
    image: "user3.jpg",
    reputation: 80,
    tags: [
      { id: "t1", title: "Node.Js" },
      { id: "t2", title: "React.Js" },
      { id: "t3", title: "Next.Js" },
    ],
  },
  {
    id: 4,
    username: "user4",
    name: "Alice Brown",
    image: "user4.jpg",
    reputation: 200,
    tags: [
      { id: "t1", title: "Node.Js" },
      { id: "t2", title: "React.Js" },
      { id: "t3", title: "Next.Js" },
    ],
  },
];

export const TagsData = [
  {
    id: "1",
    name: "JavaScript",
    description:
      "JavaScript is a popular programming language used for web development.",
  },
  {
    id: "2",
    name: "Python",
    description:
      "Python is a versatile and easy-to-learn programming language.",
  },
  {
    id: "3",
    name: "Java",
    description:
      "Java is a widely-used, platform-independent programming language.",
  },
  {
    id: "4",
    name: "C++",
    description:
      "C++ is an extension of the C programming language with object-oriented features.",
  },
  {
    id: "5",
    name: "HTML",
    description: "HTML is the standard markup language for creating web pages.",
  },
  {
    id: "6",
    name: "CSS",
    description:
      "CSS is used for styling web pages and making them visually appealing.",
  },
  {
    id: "7",
    name: "Ruby",
    description:
      "Ruby on Rails is a web application framework written in Ruby.",
  },
  {
    id: "8",
    name: "Swift",
    description:
      "Swift is a general-purpose, multi-paradigm, compiled programming language",
  },
  {
    id: "9",
    name: "Go",
    description: "Go is a statically typed, compiled programming language",
  },
  {
    id: "10",
    name: "PHP",
    description: "PHP is a server-side scripting language for web development.",
  },
  {
    id: "11",
    name: "TypeScript",
    description:
      "TypeScript is a programming language developed and maintained by Microsoft.",
  },
  {
    id: "12",
    name: "SQL",
    description:
      "SQL is a domain-specific language used in programming and designed for managing data",
  },
];
