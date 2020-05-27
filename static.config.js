import path from 'path'

const routes = [
  { path: '/' },
];

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => routes,
  paths: {
    temp: 'build/tmp',
    dist: 'build/dist',
    devDist: 'build/tmp/dev-server',
    buildArtifacts: 'build/artifacts',
  },
  plugins: [
    require.resolve('react-static-plugin-media'),
    require.resolve('react-static-plugin-typescript'),
    require.resolve('react-static-plugin-metadata'),
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
