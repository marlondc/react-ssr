# SSR React, Redux, and Router

current application scripts require `concurrently` and `webpack` as global npm installs

instructions to get running
`
  git clone ${repo link}
  cd ~/path_to_repo
  npm i
  npm run dev
  visit localhost:${process_env.PORT}
`

File Structure Philosphy

### Components
`atoms` folder contains the smallest re-used components
`components` folder contains re-used components made up of atoms
`pages` folder contains the components that make up each page
`routes` folder holds the routes declaration file

### Redux
Contains the usual `containers`, `actions`, and `reducers` structure
Each Page is wrapped by a container

### Webpack
config