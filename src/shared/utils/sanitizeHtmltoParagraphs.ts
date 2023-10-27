export function parseDescriptionToArray(input: string): string[] {
	let lines = input.split("<br>");
	lines = lines.filter(line => line.trim() !== "");
	return lines;
}