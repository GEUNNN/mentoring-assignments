import type { Meta, StoryObj } from "@storybook/react-vite";
import Carousel from "./Carousel";
import "./Carousel.css";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel", // Storybook 메뉴에서 보여질 경로
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    movieList: [
      {
        adult: false,
        backdrop_path: "/o8Kl8Jkerzpafbbfr2Cp5fy5Jjw.jpg",
        id: 93405,
        title: "Squid Game",
        original_language: "ko",
        original_title: "오징어 게임",
        overview:
          "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whooping 45.6 billion-won prize at stake.",
        poster_path: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        media_type: "tv",
        genre_ids: [10759, 9648, 18],
        popularity: 382.722,
        release_date: "2021-09-17",
        video: false,
        vote_average: 7.8,
        vote_count: 12000,
      },
      {
        adult: false,
        backdrop_path: "/3r3tZgKTw1554hcFoU8a0E96jDV.jpg",
        id: 572802,
        title: "Aquaman and the Lost Kingdom",
        original_language: "en",
        original_title: "Aquaman and the Lost Kingdom",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        poster_path: "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        media_type: "movie",
        genre_ids: [28, 12, 14],
        popularity: 1864.39,
        release_date: "2023-12-20",
        video: false,
        vote_average: 6.9,
        vote_count: 1450,
      },
      {
        adult: false,
        backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        id: 238,
        title: "The Godfather",
        original_language: "en",
        original_title: "The Godfather",
        overview:
          "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        media_type: "movie",
        genre_ids: [18, 80],
        popularity: 114.735,
        release_date: "1972-03-14",
        video: false,
        vote_average: 8.7,
        vote_count: 19300,
      },
    ],
    handleClickItem: (id: number, type: "movie" | "tv") => {
      console.log(id, type);
    },
  },
  render: (args) => {
    return (
      <Carousel {...args}>
        <Carousel.PrevButton />
        <Carousel.Track />
        <Carousel.NextButton />
      </Carousel>
    );
  },
};
