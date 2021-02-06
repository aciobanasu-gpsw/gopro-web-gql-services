default: 
	install

install:
	npm install

server:
	npm run start:env

node_check:
	npm run requirements-check

dev_build:
	npm run requirements-check
	NODE_ENV=development npm run build

prod_build:
	npm run requirements-check
	NODE_ENV=production npm run build
