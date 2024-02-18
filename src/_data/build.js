import { DateTime } from "luxon";

const dateTime = DateTime.now().setZone('America/Los_Angeles');

export default async function() {
  return {
    environment: process.env.ELEVENTY_RUN_MODE === "build" ? "production" : "development",
		buildDate: dateTime.toLocaleString(),
		buildYear: dateTime.toFormat('y')
  };
};
