import type { UserConfig } from "vite";

const config: UserConfig = {
	build: {
		minify: true,
		outDir: "./docs/",
		assetsDir: "",
	},
	base: "/simplecv/",
	
};

export default config;
