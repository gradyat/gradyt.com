import { DateTime } from "luxon";

const dateTime = DateTime.now().setZone('America/Los_Angeles');

export default async function() {
  return {
    environment: process.env.ENVIRONMENT || "production",
		buildDate: dateTime.toLocaleString(),
		buildYear: dateTime.toFormat('y')
  };
};
