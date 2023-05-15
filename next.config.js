const nextConfig = {
  reactStrictMode: true,
  // add this section to define the file loader
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
