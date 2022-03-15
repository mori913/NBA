# NBA Champion Prediction

This is the front-end part of NBA Champion Prediction.

## Usage

This projects depends on the basic JavaScript package manager of [npm](https://github.com/npm/npm), which means you need to **set up "npm"**.

Then you can start the

```shell
git clone https://github.gatech.edu/CSE6242DVA/NBA.git
cd NBA
npm run dev
```

To deploy the project in cloud, you can run the following commands, and use the static files under`build`

```shell
npm run build
```

## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React

## Project structure

```
$PROJECT_ROOT
│   # Static files for readme
├── doc
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images
└── public
│   # Static files for data visual analytics
└── data
```

## License

MIT License.

You can create your own analytical website for free without notifying me by forking this project under the following conditions:

- Add a reference to this repository
- Do not use the data under the director `data`
