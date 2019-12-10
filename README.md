# Gadget List Api

### Prerequisites
1. MongoDB >= v3.x.x
2. Yarn >= v1.x.x
3. Node >= v10.x.x

### Setup
1. Clone this repository using, `git clone https://github.com/brayn003/dare-api.git`.
1. Once cloned, get inside the project folder using, `cd dare-api`.
1. Install dependencies using `yarn`.
1. For setting it for the first time, copy the `.env.sample` file into `.env`. You will find the file in project root. You can use, `cp .env.sample .env`.
1. After copying, the `.env` file, you will need to run migrations using `yarn migrate up-all`.
1. Finally run the server in development mode using, `yarn dev`