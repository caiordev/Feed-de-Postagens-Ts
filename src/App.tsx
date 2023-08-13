import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/caiordev.png",
      name: "Caio Reis",
      role: "Backend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio.É um projeto que fiz no NLW Return,",
      },
      { type: "link", content: "Jane.design/doctorcare" },
    ],
    publishedAt: new Date("2020-05-03 20:00:00 "),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/VictorEmanuel08.png",
      name: "Victor",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio.É um projeto que fiz no NLW Return,",
      },
      { type: "link", content: "Jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-03 20:00:00 "),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
