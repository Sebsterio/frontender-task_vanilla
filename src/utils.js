export const ensurePadding = (string) =>
	string.replace(/[.](\d)$/, ".$1" + "0").replace(/^(\d+)$/, "$1" + ".00");
