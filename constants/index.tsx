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
    id: "b1",
    title: "Recommended",
  },
  {
    id: "b2",
    title: "Newest",
  },
  {
    id: "b3",
    title: "Frequent",
  },
];

export const ProgrammingLanguagesData = [
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

export const TagsData = [
  {
    id: "t1",
    name: "javascript",
    questionsCount: 20,
    description:
      "JavaScript is a popular programming language used for web development.",
  },
  {
    id: "t2",
    name: "python",
    questionsCount: 12,
    description:
      "Python is a versatile and easy-to-learn programming language.",
  },
  {
    id: "t3",
    name: "react",
    questionsCount: 35,
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: "t4",
    name: "java",
    questionsCount: 26,
    description:
      "Java is a widely-used, platform-independent programming language.",
  },
  {
    id: "t5",
    name: "c++",
    questionsCount: 29,
    description:
      "C++ is an extension of the C programming language with object-oriented features.",
  },
  {
    id: "t6",
    name: "html",
    questionsCount: 26,
    description: "HTML is the standard markup language for creating web pages.",
  },
  {
    id: "t7",
    name: "css",
    questionsCount: 18,
    description:
      "CSS is used for styling web pages and making them visually appealing.",
  },
  {
    id: "t8",
    name: "node.js",
    questionsCount: 16,
    description:
      "Node.js is a runtime environment for server-side JavaScript applications.",
  },
  {
    id: "t9",
    name: "ruby-on-rails",
    questionsCount: 12,
    description:
      "Ruby on Rails is a web application framework written in Ruby.",
  },
  {
    id: "t10",
    name: "php",
    questionsCount: 16,
    description: "PHP is a server-side scripting language for web development.",
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

export const ProfileStatisticsData = [
  {
    id: 1,
    path: "/assets/images/golden.png",
    name: "Gold",
    quantity: 7,
  },
  {
    id: 2,
    path: "/assets/images/silver.png",
    name: "Silver",
    quantity: 2,
  },
  {
    id: 3,
    path: "/assets/images/bronze.png",
    name: "Bronze",
    quantity: 4,
  },
];
