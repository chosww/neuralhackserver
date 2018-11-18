import rndsong from "rnd-song";
import request from "request";
import fs from "fs";
import ytdl from "ytdl-core";
import api_keys from "./config.json";
import genreCode from "./genres.json";

const numGenres = Object.keys(genreCode).length;
const randomGenreIndex = Math.floor(Math.random() * Math.floor(numGenres - 1));
const randomGenre = genreCode[Object.keys(genreCode)[randomGenreIndex]];

const options = {
  api_key: api_keys.musicApi,
  genre: randomGenre,
  snippet: true,
  language: "en"
};

export function main(event, context, callback) {
  const data = JSON.parse(event.body);
}
