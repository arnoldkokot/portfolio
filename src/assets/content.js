import trackerPreview from "../assets/tracker.png";
import daijiPreview from "../assets/daiji.png";

export const links = {
  resume:
    "https://drive.google.com/file/d/1sb_Bpk7cMzPelfwiP_65Eq167rNs1_UQ/view",
  github: "https://github.com/arnoldkokot",
  twitter: "https://twitter.com/deithyy",
  instagram: "https://www.instagram.com/niearek",
  portfolio: "https://github.com/arnoldkokot/portfolio",
};

export const works = {
  "league-tracker": {
    title: "League tracker",
    img: trackerPreview,
    tags: ["website", "riot api"],
    url: "https://github.com/arnoldkokot/tracker",
    description:
      "League tracker provides insight to League of Legends players about thier game performance, match history, and ranked ladder.",
  },
  daiji: {
    title: "Daiji - Music bot",
    img: daijiPreview,
    tags: ["bot", "discord api"],
    url: "https://github.com/arnoldkokot/discord-bot",
    description:
      "Discord music bot allowing you to play YouTube videos and playlists in a voice channel using text commands.",
  },
};
